import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/CardContent'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@materialui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbikeImg'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
        ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight:400
    }
}))

export default function Home() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant ="h6" className={classes.title}>
                Home page
            </Typography>
            <CardMedia className={classes.media}
            image={unicornBikeImg} title='Unicorn Bicycle'/>
            <CardContent>
                <Typography variant="body2" component="p">
                    Yo this is DevHub.
                </Typography>
            </CardContent>
        </Card>
    )
}