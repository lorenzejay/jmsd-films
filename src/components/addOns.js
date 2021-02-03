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
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 5vh;
      padding: 0 5%;
      /* margin-left: ${props => (props.number % 2 === 0 ? "auto" : 0)}; */

      /* align-items: ${props => (props.number % 2 === 0 ? "" : "flex-end")};
      
      */
      h3,
      p {
        width: 100%;
        text-align: ${props => (props.number % 2 === 0 ? "end" : "start")};
      }
      ul {
        display: flex;
        flex-direction: column;
        width: 65%;
        padding: 0;
        margin: 0;
        justify-content: flex-end;
        /* align-self: flex-start; */

        align-self: ${props =>
          props.number % 2 === 0 ? "flex-end" : "flex-start"};
        li {
          text-align: ${props => (props.number % 2 === 0 ? "end" : "start")};
        }
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .addoncontent {
      padding: 0 20%;
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
    <div className="flex flex-col justify-items-center items-center  gap-5">
      {data.allAddOnsJson.nodes.map(item => {
        console.log(item.id)
        return (
          <AddOnItem key={item.id} number={item.id} className="p-10  w-full">
            <div className="addoncontent flex flex-col">
              <h3 className="text-3xl">{item.title}</h3>
              <p className=" my-5 text-lg lg:text-xl tracking-widest">
                + {item.price}
              </p>

              <ul>
                {item.description.map((x, i) => (
                  <li
                    key={i}
                    className={`leading-loose text-lg ${
                      item.description.length > 1 ? " bullets" : "list-none"
                    }`}
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
