// import { CreateNodeArgs } from 'gatsby';
// import { createFilePath } from 'gatsby-source-filesystem';
// import { config } from '../../config';

// export const createNode = (args: CreateNodeArgs) => {
//     const { node, actions, getNode } = args;
//     const { createNodeField } = actions;

//     if (node.internal.type === `MarkdownRemark`) {
//         const slug = createFilePath({ node, getNode, basePath: `pages` });

//         const rewriteSlug = (slug: string): string => {
//             let slugMaker = slug;

//             // 폴더 경로에 따라 url에 표시되는 것을 폴더 경로를 제거하고 파일명으로만 url을 지정되도록 하기 위함
//             const matched = slugMaker.match(/\//g);
//             // if (slugMaker.match(/\//g).length > 2) {
//             if (matched && matched.length > 2) {
//                 const tempStr = slugMaker.split('/');
//                 slugMaker = `/${tempStr[tempStr.length - 2]}/`;
//             }

//             // jekyll 기준으로 파일명에 날짜를 포함시키던 것을 url에서 제거하기 위함
//             const dayRegExp = /\/(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-/;
//             if (slugMaker.match(dayRegExp)) {
//                 slugMaker = '/' + slugMaker.replace(dayRegExp, '');
//             }

//             return slugMaker;
//         };

//         const rewriteNode = (node: any) => {
//             // 마크다운 파일 내 keywords 필드가 비어있을 시 오류가 나지 않도록 하기 위함
//             if (!node.frontmatter.keywords) {
//                 node.frontmatter.keywords = [config.title, config.author];
//             }

//             // 마크다운 파일 내 퍼블리쉬 필드가 비어있을 시 오류가 나지 않도록 하기 위함
//             // development 환경일 시 published 필드가 모두 true이도록 하기 위함
//             // if (
//             //   node.frontmatter.published === undefined ||
//             //   process.env.NODE_ENV === 'development'
//             // ) {
//             //   node.frontmatter.published = true;
//             // }

//             // 마크다운 파일 내 태그 필드가 비어있을 시 오류가 나지 않도록 하기 위함
//             if (!node.frontmatter.tags || node.frontmatter.tags === '') {
//                 node.frontmatter.tags = ['undefined'];
//             }
//             // 태그 필드가 배열이 아닌 문자열 하나일때 배열로 덮음
//             else if (typeof node.frontmatter.tags === 'string') {
//                 node.frontmatter.tags = [node.frontmatter.tags];
//             }

//             // markdown 내 date의 timezone 제거
//             if (node.frontmatter.date.indexOf('+') !== -1) {
//                 const date = new Date(node.frontmatter.date.split('+')[0]);
//                 node.frontmatter.date = date;
//             } else {
//                 node.frontmatter.date = new Date(node.frontmatter.date);
//             }

//             return node;
//         };

//         const newSlug = rewriteSlug(slug);
//         const newNode = rewriteNode(node);

//         createNodeField({
//             name: `slug`,
//             node: newNode,
//             value: newSlug,
//         });
//     }
// };
