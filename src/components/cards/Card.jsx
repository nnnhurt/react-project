import React from "react"
import {Card} from "@consta/uikit/Card"
import {Layout} from "@consta/uikit/Layout"
import {Text} from "@consta/uikit/Text"

const MyCard = ({imgURI, name, desc, width="calc(50% - 5px)"}) => {
  return (
    <Card style={{ minHeight: "100px", maxWidth: width, width: width}}>
      <Layout direction="row">
        <img src={imgURI}  style={{ minWidth: "50px"}}/>
        <Layout direction="column">
          <Text weight="bold">{name}</Text>
          <Text weight="regular">{desc}</Text>
        </Layout>
      </Layout>
    </Card>
  )
}

export default MyCard;
