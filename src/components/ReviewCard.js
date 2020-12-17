import React from 'react'
import { Card } from 'semantic-ui-react'

export default class ReviewCard extends React.Component {


    render(){
        //console.log(this.props.date)
         const {name, acidity_level, aroma} = this.props 
         //console.log(this.props)
        return (
            <Card>

                {name}
            <li>{aroma}</li>
            <li>{acidity_level}</li>
<br></br>
<br></br>
<br></br>
<br></br>
            </Card>
        )
    }
}