import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var cardStyle = {
            display: 'block',
            width: '20vw',
            transitionDuration: '0.3s',
            height: '20vw'
        }
        return (
           
            <Card style={cardStyle}>
                <BrandCardHeader
                    image={
                        'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
                    }
                    extra={"Priority : " + this.props.priority}
                />
                <CardContent>
                    <TextInfoContent

                        overline={'Date : ' + this.props.dueDate.format('DD-MM-YYYY') }
                        heading={'Description: '}
                        body={this.props.text}                        
                    />
                </CardContent>
            </Card>
          
        );
    }

}