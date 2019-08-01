import React from 'react'
import Link from 'next/link'

const Scrollbox = props => (
    <>
    <h2 className="mt-5">{props.name}</h2>
    <div className="scrollbox">
        {props.items.map(({ slug,  name})=> (
        <BasicCard slug={slug} name={name} />
        ))}
    </div>
    </>
    )

const BasicCard = props => (
    <div className="scrollbox-item m-2">
        <div className="card shadow-sm scrollbox-square">
            <Link href="/brands/[slug]" as={"/brands/" + props.slug}>
            <a>
                <div className="scrollbox-img">
                    <img src="{props.slug}" alt="" />
                </div>
                <div className="scrollbox-text">
                    <p className="text-muted small p-0 m-0">{ props.name }</p>
                </div>
            </a>
            </Link>
        </div>
    </div>
    )

export default Scrollbox