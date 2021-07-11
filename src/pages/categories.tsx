import * as React from 'react';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/tags.scss';
import PostList from '../components/PostList';
import { Query } from '../../@types/graphql-types';

// interface GroupItem {
//     fieldValue: string;
//     totalCount: number;
// }

export interface CategoriesPageProps {
    data: Query;
}

const Categories: React.FC<CategoriesPageProps> = ({ data }) => {
    const { group } = data.allMarkdownRemark;
    const [largeCount, setLargeCount] = useState(0);
    const [targetCategory, setTargetCategory] = useState('undefined');

    group.sort((a, b) => {
        const x = a?.fieldValue?.toLocaleLowerCase() ?? '';
        const y = b?.fieldValue?.toLocaleLowerCase() ?? '';

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
    });

    const tagList = group.map(g => {
        const { fieldValue, totalCount } = g;
        if (fieldValue) {
            const getFontSize = (): string => {
                let fontSize = Math.round(50 / (largeCount / totalCount)).toString();
                if (fontSize.length <= 1) fontSize = `0${fontSize}`;
                return `1.${fontSize}rem`;
            };

            return (
                <li key={g.fieldValue || `${+new Date()}`}>
                    <span
                        className="tag-text"
                        style={{
                            fontSize: g.fieldValue !== 'undefined' ? getFontSize() : '1rem',
                            opacity: g.fieldValue === targetCategory ? '0.9' : '0.5',
                            fontWeight: g.fieldValue === targetCategory ? 'bold' : 'normal',
                        }}
                        onClick={() => {
                            setTargetCategory(fieldValue);
                        }}
                    >
                        <a href={`#${fieldValue}`}>{`${fieldValue}`}</a>
                    </span>
                </li>
            );
        }
    });

    (tagList.filter(x => x) as JSX.Element[]).sort((a: React.ReactElement) => {
        if (a.key === 'undefined') return -1;
        return 0;
    });

    const getPostList = () => {
        if (group.filter(g => g.fieldValue === targetCategory).length) {
            return group.filter(g => g.fieldValue === targetCategory)[0].edges;
        }
        if (group.filter(g => g.fieldValue === 'undefined').length) {
            return group.filter(g => g.fieldValue === 'undefined')[0].edges;
        }
        return [];
    };

    useEffect(() => {
        let large = 0;
        for (const g of group) {
            if (g.fieldValue !== 'undefined' && g.totalCount > large) large = g.totalCount;
        }
        setLargeCount(large);

        // return () => {};
    }, [group]);

    useEffect(() => {
        if (location.hash) setTargetCategory(location.hash.split('#')[1]);
        // return () => {};
    }, []);

    return (
        <Layout>
            <SEO title="Tags" />
            <div id="tags">
                <div className="tag-list-wrap">
                    <ul>{tagList}</ul>
                </div>

                <PostList posts={getPostList()} onCategoryClick={category => setTargetCategory(category)} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            group(field: frontmatter___categories) {
                fieldValue
                totalCount
                edges {
                    node {
                        excerpt(format: PLAIN)
                        fields {
                            slug
                        }
                        frontmatter {
                            date(formatString: "YYYY-MM-DD")
                            categories
                            title
                            tags
                            keywords
                        }
                    }
                }
            }
        }
    }
`;

export default Categories;
