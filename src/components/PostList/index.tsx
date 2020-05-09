import React from 'react';
import { Link } from 'gatsby';

import './postList.scss';

export interface PostListProps {
    posts: any;
    onTagClick?: (tag: string) => void;
    onCategoryClick?: (category: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onTagClick, onCategoryClick }) => {
    // const { posts } = props;

    const handleTagClick = (tag: string) => () => {
        if (onTagClick) {
            onTagClick(tag);
        }
    };

    const handleCategoryClick = (category: string) => () => {
        if (onCategoryClick) {
            onCategoryClick(category);
        }
    };

    const mapPost = posts.map((post: any) => {
        const { node } = post;
        const { excerpt, fields, frontmatter } = node;
        const { slug } = fields;
        const { date, title, tags, categories } = frontmatter;

        const mapTag = (tags || []).map((tag: string) => {
            if (tag === 'undefined') return;

            return (
                <li key={`${slug}-${tag}`} className="tag">
                    <span onClick={handleTagClick(tag)}>
                        <Link to={`/tags/#${tag}`}>{`#${tag}`}</Link>
                    </span>
                </li>
            );
        });

        const mapCategories = (categories || []).map((category: string, index: number) => {
            if (category) {
                return (
                    <li key={`${slug}-${category}`} className="tag">
                        <span onClick={handleCategoryClick(category)}>
                            {index > 0 && <span> | </span>}
                            <Link to={`/categories/#${category}`}>{category}</Link>
                        </span>
                    </li>
                );
            }
        });

        return (
            <li key={slug} className="post">
                <article>
                    <div className="info">
                        <ul className="tag-list">{mapCategories}</ul>
                    </div>
                    <h2 className="title">
                        <Link to={slug}>{title}</Link>
                    </h2>
                    <div className="info">
                        <span className="date">{date}</span>
                        {tags.length && tags[0] !== 'undefined' ? <span className="info-dot">·</span> : null}
                        <ul className="tag-list">{mapTag}</ul>
                    </div>
                    <span className="excerpt">{excerpt}</span>
                </article>
            </li>
        );
    });
    return (
        <div className="post-list">
            <ul>{mapPost}</ul>
        </div>
    );
};

export default PostList;
