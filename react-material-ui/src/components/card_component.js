import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';


const API_URL = 'http://localhost:8080/monitor'

class CardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statistic: "",
            type: this.props.type,
            measurement_unit: this.props.measurement_unit
        };
        this.loadData = this.loadData.bind(this);
        console.log(this.state);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(){
        console.log(this.state);
        const link = `${API_URL}/${this.state.type}`;
        console.log(link);
        axios.get(link)
            .then(response => {
                console.log(response)
                this.setState({statistic: response.data});
                console.log(this.state);
            } );
    }

    render() {

        return (
            <Card className={this.props.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="secondary">
                            {this.props.title} ({this.state.measurement_unit})
                        </Typography>
                        <Typography variant="h1" component="h2" color="primary">
                            {this.state.statistic}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="refresh" color="primary" onClick={this.loadData}>
                        <RefreshIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

}

export default CardComponent;