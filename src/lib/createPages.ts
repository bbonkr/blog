import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import { Query, MarkdownRemarkEdge } from '../../@types/graphql-types';

interface SeriesItem {
    slug: string;
    title: string;
    num: number;
}

export const createPages = async (args: CreatePagesArgs) => {
    const { actions, graphql, reporter } = args;
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`../templates/Post.tsx`);
    const result = await graphql<Query>(`
        {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                            categories
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const getSeries = target => {
        const splitedSlug = target.split('_');
        if (splitedSlug.length >= 3) return 0;

        const seriesNum = splitedSlug[splitedSlug.length - 1].split('/').join('');
        const isNum = !/[^0-9]/g.test(seriesNum);

        if (isNum) return parseInt(seriesNum, 10);
        return 0;
    };

    if (result.data) {
        const { edges } = result.data.allMarkdownRemark;

        edges.forEach(({ node }) => {
            if (node.fields) {
                const { slug } = node.fields;
                if (slug) {
                    // series
                    let filteredEdges: MarkdownRemarkEdge[] = [];
                    const series: SeriesItem[] = [];

                    if (getSeries(slug)) {
                        filteredEdges = edges.filter(e => {
                            if (e.node.fields) {
                                const fSlug = e.node.fields.slug;
                                if (fSlug) {
                                    const splitedFSlug = fSlug.split('_');
                                    if (splitedFSlug.length >= 3) return false;

                                    if (slug.split('_').length > 1 && slug.split('_')[0] === splitedFSlug[0]) {
                                        return true;
                                    }
                                }
                            }

                            return false;
                        });

                        if (filteredEdges.length) {
                            for (const e of filteredEdges) {
                                if (e.node.fields && e.node.frontmatter) {
                                    const { slug } = e.node.fields;
                                    const { title } = e.node.frontmatter;

                                    if (slug && title) {
                                        const seriesNum = getSeries(e.node.fields.slug);

                                        if (seriesNum) {
                                            series.push({
                                                slug: slug,
                                                title: title,
                                                num: seriesNum,
                                            });
                                        }
                                    }
                                }
                            }

                            series.sort((a, b) => {
                                return a.num - b.num;
                            });
                        }
                    }

                    createPage({
                        path: slug,
                        component: blogPostTemplate,
                        context: { slug, series },
                    });
                }
            }
        });
    }
};
