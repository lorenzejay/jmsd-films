import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

export const AddOnItem = styled.section`
  background-color: ${props => (props.number % 2 === 0 ? "#EDEDED" : "white")};
  display: flex;
  flex-direction: column;
  min-height: 35vh;
  @media screen and (min-width: 1024px) {
    .addoncontent {
      width: 50%;
      margin-left: ${props => (props.number % 2 === 0 ? 0 : "auto")};
    }
  }
`

const AddOns = () => {
  const data = useStaticQuery(graphql`
    query {
      allAddOnsJson {
        nodes {
          id
          title
          price
          description
        }
      }
    }
  `)
  console.log(data.allAddOnsJson)
  return (
    <div className="flex flex-col gap-5">
      {data.allAddOnsJson.nodes.map(item => {
        console.log(item.id)
        return (
          <AddOnItem key={item.id} number={item.id} className="p-10 ">
            <div className="addoncontent ">
              <h3 className="text-3xl">{item.title}</h3>
              <p className=" my-5 tracking-widest">+{item.price}</p>

              <ul>
                {item.description.map((x, i) => (
                  <li
                    key={i}
                    className="bullets lg:w-3/4 leading-loose text-lg"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </AddOnItem>
        )
      })}
    </div>
  )
}

export default AddOns
