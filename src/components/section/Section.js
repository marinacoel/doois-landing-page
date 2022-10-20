import { Button, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import EmailIcon from '@mui/icons-material/Email'

import img from 'assets/section/Frame.svg'
import video from 'assets/section/doois.mp4'
import background from 'assets/section/background.svg'
import gps from 'assets/section/gps.svg'

import { sectionStyles } from './section.styles'

export const Section = () => {
  const classes = sectionStyles()

  return (
    <div className={classes.section}>
      <section id="home" className={classes.s_one}>
        <div className={classes.s_row}>
          <video
            className={classes.s_video}
            src={video}
            autoPlay="true"
            muted="true"
            loop="true"
          />
          <Button variant="contained" color="success" className={classes.s_btn}>
            Get start now!
          </Button>
        </div>
        <img className={classes.s_img} src={img} />
      </section>

      <section id="how" className={classes.s_two}>
        <div className={classes.s_two_row}>
          <Typography variant="h4" className={classes.s_two_txt}>
            How to use Doois app
          </Typography>
        </div>
        <div className={classes.s_two_row}>
          <div className={classes.txt_row}>
            <Typography variant="h6" color="primary.main" className={classes.s_two_txt}>
              01.
            </Typography>
            <Typography variant="h6" className={classes.s_two_txt}>
              Lorem ipsum
            </Typography>
            <Typography variant="body1" className={classes.s_two_txt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </Typography>
          </div>
          <div className={classes.txt_row}>
            <Typography variant="h6" color="primary.main" className={classes.s_two_txt}>
              02.
            </Typography>
            <Typography variant="h6" className={classes.s_two_txt}>
              Lorem ipsum
            </Typography>
            <Typography variant="body1" className={classes.s_two_txt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </Typography>
          </div>
          <div className={classes.txt_row}>
            <Typography variant="h6" color="primary.main" className={classes.s_two_txt}>
              03.
            </Typography>
            <Typography variant="h6" className={classes.s_two_txt}>
              Lorem ipsum
            </Typography>
            <Typography variant="body1" className={classes.s_two_txt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </Typography>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={classes.s_three}
        style={{ backgroundImage: `url(${background})` }}>
        {/* <div className={classes.s_three_row}> */}
          <Typography variant="h4" color="primary.white" className={classes.s_three_title}>
            Promote your store with Doois
          </Typography>
          <Typography variant="h6" color="primary.white" className={classes.s_three_txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </Typography>
        {/* </div> */}
      </section>

      <section id="services" className={classes.s_four}>
        <div className={classes.s_four_row}>
          <Typography variant="h4" className={classes.s_four_title}>
            Features that give you real feel
          </Typography>
          <Typography variant="body1" className={classes.s_four_txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo
            viverra maecenas.
          </Typography>
          <Button variant="contained" className={classes.s_btn}>
            Download now
          </Button>
        </div>
        <img className={classes.s_four_img} src={gps} />
      </section>

      <section id="contact" className={classes.s_five}>
        <div className={classes.s_five_row}>
          <Typography variant="h4" color="primary.white" className={classes.s_five_row_title}>
            {' '}
            DOOIS{' '}
          </Typography>

          <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. 
          </Typography>

          <div className={classes.s_five_icon}>
            <InstagramIcon className={classes.s_five_icon_row} />
            <FacebookIcon className={classes.s_five_icon_row} />
            <EmailIcon className={classes.s_five_icon_row} />

          </div>

        </div>
        <div className={classes.s_five_column}>
          <div className={classes.s_five_column_one}>
            <Typography variant="body1" color="primary.white" className={classes.s_five_column_title}>
              {' '}
              Services{' '}
            </Typography>
            <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
              {' '}
              Team management{' '}
            </Typography>
            <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
              {' '}
              Colaboration{' '}
            </Typography>
            <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
              {' '}
              Events{' '}
            </Typography>
          </div>
          <div className={classes.s_five_column_two}>
            <Typography variant="body1" color="primary.white" className={classes.s_five_column_title}>
              {' '}
              Downloads{' '}
            </Typography>
            <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
              {' '}
              Download for Apple Store{' '}
            </Typography>
            <Typography variant="body2" color="primary.white" className={classes.s_five_txt_row}>
              {' '}
              Download for Play Store{' '}
            </Typography>
          </div>
        </div>
      </section>
    </div>
  )
}
