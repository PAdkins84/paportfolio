import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import sanityClient from '../client';

export default function Posts() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);
    return (
        <main>
            <section>
                <div>
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span key={index}>
                            <img 
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="blogImg"
                            />
                            <span>
                                <h3 className="h3Style">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}