import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActions"
import chordFinderThumb from "../images/chordFinderThumb.jpg"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"

import "../css/home.css"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function Home() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  return (
    <React.Fragment>
      <div className="homeTopImage" title="Home title background">
        <div className="vertical-center">
          <h1 className="homeTitle">
            Guitar and Ukulele Tools
            <br /> for Composers
          </h1>
        </div>
      </div>
      <div className="titleBox">
        <h2 className="">Tools</h2>
      </div>
      <div className="cardBoxes">
        <Link to="/guitar-chord-finder" className="link">
          <Card className={classes.card}>
            <CardHeader
              title="Guitar Chords Finder"
              subheader="Find the best chord for your needs"
            />

            <div id="chordFinderThumb" title="Guitar Chords Finder Thumb"></div>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardText"
              >
                There are <b>many chord finders online</b>, so what makes this
                one
                <b> different</b>? It's not only to find the next chord but to
                find the one that will be <b>harmonically consistent</b> with
                the other ones. Unlike other chord finders, we let you{" "}
                <b>filter by fret</b> showing you which one is in{" "}
                <b>harmonic close proximity</b> with the other chords of the
                progression.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/ukulele-chord-finder" className="link">
          <Card className={classes.card}>
            <CardHeader
              title="Ukulele Chords Finder"
              subheader="Which chord fits better with the last one?"
            />
            <div id="ukeFinderThumb" title="Ukulele Chords Finder Thumb"></div>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="cardText"
              >
                Our <b>Ukulele Chord Finder</b> works like the guitar one
                letting you
                <b> filter by fret</b> making easy to find the{" "}
                <b>correct shape</b> between a bunch of options. Don't continue
                using the <b>common</b> ukulele chord shapes and give{" "}
                <b>new colors</b> to your progressions with all these new chord
                possibilities.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/guitar-harmonizer" className="link">
          <Card className={classes.card}>
            <CardHeader
              title="Guitar Scale Harmonizer"
              subheader="Diatonic chords for the choosen scale"
            />
            <div
              id="guitarScaleHarmonizeThumb"
              title="Guitar Scale Harmonizer Thumb"
            ></div>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                There are <b>many different scales</b>, major, minor, blues,
                modal scales, exotic… Many colors for your solo or melody but
                there is something missing. Without the{" "}
                <b>chords that are underneath</b> these scales is difficult to
                find the <b>correct flavor</b> and the essence of this bunch of
                colors. Our <b>Guitar Scale Harmonizer</b> returns all the
                diatonic chords, the seventh ones, and the other common
                positions.
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
      <div className="titleBox" id="articleTitle">
        <h2 className="">Articles</h2>
      </div>
      <div className="articleCardBoxes">
        <Link to="/triads-why-are-important" className="link">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../images/triads_1.jpg")}
                title="Triads, why are they so important?"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Triads, why are they so important?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  There is a common scenario in many bands with{" "}
                  <b>two guitars</b> where both guitars are{" "}
                  <b>playing exactly the same chords</b> at some point in the
                  song...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/what-is-this-about" className="link">
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  What aims to be this site?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Guitar Composers Toolbox aims to be a site where composers
                  can find <b>interactive guitar tools</b> that will help them
                  throughout the composition process...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </React.Fragment>
  )
}
