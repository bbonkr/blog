require('ts-node').register();
const { config } = require('./config');

const { title, description, author, googleAnalytics, siteUrl } = config;

const gatsbyConfig = {
    siteMetadata: { title, description, author, siteUrl },

    plugins: [
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `@types/graphql-types.d.ts`,
                documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
                codegenDelay: 200,
                pluckConfig: {
                    // this is the default config
                    globalGqlIdentifierName: 'graphql',
                    modules: [{ name: 'gatsby', identifier: 'graphql' }],
                },
                //   additionalSchemas: [
                //     {
                //       key: 'example',
                //       fileName: 'graphql-types-example.ts',
                //       schema: 'https://example.com/graphql',
                //       pluckConfig: {
                //         // config to ensure only queries using the `gql` tag are used for this schema
                //         globalGqlIdentifierName: 'gql',
                //         modules: [
                //           {
                //             name: 'graphql-tag',
                //             identifier: 'gql',
                //           },
                //         ],
                //       },
                //     }
                //   ],
            },
        },
        // {
        //     resolve: `gatsby-plugin-generate-typings`,
        //     options: {
        //         dest: `./@types/graphql-types.d.ts`,
        //     },
        //     documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
        //     codegenDelay: 200,
        //     pluckConfig: {
        //         // this is the default config
        //         globalGqlIdentifierName: 'graphql',
        //         modules: [{ name: 'gatsby', identifier: 'graphql' }],
        //     },
        // },
        // `gatsby-plugin-typegen`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: googleAnalytics,
            },
        },

        `gatsby-plugin-react-helmet`,

        `gatsby-plugin-typescript`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_posts`,
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                tableOfContents: {
                    maxDepth: 3,
                },
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: true,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
                            // languageExtensions: [
                            //     {
                            //         language: 'superscript',
                            //         extend: 'javascript',
                            //         definition: {
                            //             superscript_types: /(SuperType)/,
                            //         },
                            //         insertBefore: {
                            //             function: {
                            //                 superscript_keywords: /(superif|superelse)/,
                            //             },
                            //         },
                            //     },
                            // ],
                            // Customize the prompt used in shell output
                            // Values below are default
                            // prompt: {
                            //     user: 'root',
                            //     host: 'localhost',
                            //     global: false,
                            // },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            // escapeEntities: {},
                        },
                    },
                    {
                        resolve: 'gatsby-remark-emojis',
                        options: {
                            active: true,
                            class: 'emoji-icon',
                            size: 64,
                            styles: {
                                display: 'inline',
                                margin: '0',
                                'margin-top': '1px',
                                position: 'relative',
                                top: '5px',
                                width: '25px',
                            },
                        },
                    },
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-katex`,
                    `gatsby-remark-embedder`,
                ],
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },

        `gatsby-transformer-sharp`,

        `gatsby-plugin-sharp`,

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: title,
                short_name: title,
                description: description,
                start_url: `/`,
                lang: 'ko',
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: 'src/images/icon.png',
                legacy: false,
                include_favicon: false,
            },
        },

        `gatsby-plugin-sass`,

        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.ts`,
            },
        },

        `gatsby-plugin-sitemap`,

        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ 'content:encoded': edge.node.html }],
                                });
                            });
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }, limit: 10
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: `${title} | Feed`,
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: siteUrl,
                sitemap: `${siteUrl}${siteUrl[siteUrl.length - 1] !== '/' ? '/' : ''}sitemap.xml`,
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
    ],
};

if (process.env.NODE_ENV === 'development') {
    gatsbyConfig.plugins.push({
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/_drafts`,
            name: 'markdown-pages',
        },
    });
}

module.exports = gatsbyConfig;
