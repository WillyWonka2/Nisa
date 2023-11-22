import Image from "next/image";
import heroImg from "@/../public/img/Image.png";
import devImg from "@/../public/img/developer_img.png";
import authorImg from "@/../public/img/authorImg.png";
import devDecorImg1 from "@/../public/img/webDecorImg1.png";
import devDecorImg2 from "@/../public/img/webDecorImg2.png";
import dev2Img from "@/../public/img/powerBlockImg.png";
import powerDecorImg from "@/../public/img/powerDecor.png";
import flowerPng from "@/../public/img/flower.png";
import designer2Photo from "@/../public/img/designer2.png";
import designer3Photo from "@/../public/img/designer3.png";
import creativeDecorImg from "@/../public/img/creativeDecor.png";
import videoPreloaderImg from "@/../public/img/videoPreloaderImg.png";

import styles from "@/styles/home.module.css";

import Button from "@/components/UI/Button";
import {
  MassegeIcon,
  TwitchIcon,
  LayersIcon,
  DashboardIcon,
  CloudIcon,
  MassegeRoundIcon,
  LayerRoundIcon,
  DecorLeftSpotlightSectionIcon,
  DecorRightSpotlightSectionIcon,
  PlayerIcon
} from "@/../public/svg/icons";

import MarqueeBlock from "@/components/Marquee/MarqueeBlock"

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__block}`}>
          <div className={styles.hero__content}>
            <h1>Nisa boosts team product excellence</h1>
            <p>
              Nisa is constantly improving to move forward through dashboard,
              statistics, data and verify and superior human resources.
            </p>
            <Button text="Get Started" pathname="/" arrowIcon={true} />
          </div>
          <div className={styles.hero__img}>
            <Image src={heroImg} alt="Hero Image" />
            <div className={styles.design__block}>
              <div className={styles.design__second_block}>
                <h3>+380</h3>
                <span className={styles.line_1}></span>
                <span className={styles.line_2}></span>
                <span className={styles.decor__btn}></span>
                <div className={styles.massege_design_block}>
                  <MassegeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.discover}>
        <div className={`${styles.discover__block} container`}>
          <div className={styles.discover__img}>
            <Image src={devImg} alt="Developer Photo" />
            <div className={styles.decor__block1}>
              <Image src={devDecorImg1} alt="Developer Decor Photo 1" />
            </div>
            <div className={styles.decor__block2}>
              <Image src={devDecorImg2} alt="Developer Decor Photo 2" />
            </div>
          </div>
          <div className={styles.discover__content}>
            <h2>Discover the power of creative freedom with Nisa.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </p>
            <Button
              text="Explore Section"
              pathname="/"
              bgColor="var(--secondary-color-blue)"
            />
            <p className={styles.add_details}>
              Add some additional details about your product
            </p>
            <div className={styles.author__block}>
              <div className={styles.author__img}>
                <Image src={authorImg} alt="Author Photo" />
              </div>
              <div>
                <h3>Motiur Leeman</h3>
                <p>Markating Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.share}>
        <div
          className={`${styles.share__block} ${styles.share__block_container}`}
        >
          <div className={styles.share__content}>
            <h2>Share the features that help your customers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui. Cursus facilisis diam
              turpis leo netus consequat phasellus. Netus ipsum sed faucibus
              enim.{" "}
            </p>
            <Button
              text="Explore Section"
              pathname="/"
              bgColor="var(--secondary-color-blue)"
            />
          </div>
          <div className={styles.share__list}>
            <div>
              <div className={styles.icon__block}>
                <TwitchIcon />
              </div>
              <h3>Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div>
              <div className={styles.icon__block}>
                <LayersIcon />
              </div>

              <h3>Documentation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div>
              <div className={styles.icon__block}>
                <DashboardIcon />
              </div>
              <h3>Intergrations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div>
              <div className={styles.icon__block}>
                <CloudIcon />
              </div>
              <h3>Customers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.power_section}>
        <div className={`${styles.power__block} container`}>
          <div className={styles.power__img}>
            <div className={styles.img__block}>
              <Image src={dev2Img} alt="Developer" />
              <div className={styles.statistics__block}>
                <p>EXPENSES</p>
                <div className={styles.statistics__price}>
                  <h2>$ 13.70</h2>
                  <div>
                    <p>+1.4%</p>
                  </div>
                </div>
                <div className={styles.statistics__graphic}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className={styles.img__decor}>
              <Image src={powerDecorImg} alt="Photo Decoration" />
            </div>
          </div>
          <div className={styles.power__content}>
            <h2>Discover the power of creative freedom with Nisa.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.{" "}
            </p>
            <div className={styles.button__block}>
              <Button
                text="Explore Section"
                pathname="/"
                bgColor="var(--secondary-color-blue)"
              />
              <Button text="Get Started" pathname="/" playIcon={true} />
            </div>
            <div className={styles.info__block}>
              <div>
                <div>
                  <MassegeRoundIcon />
                </div>
                <p>Built to be customise with complete ease.</p>
              </div>
              <div>
                <div>
                  <LayerRoundIcon />
                </div>
                <p>All the pages you need to go live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.creative__section} container`}>
        <div className={styles.creative__block}>
          <div className={styles.creative__content}>
            <h2>Discover the power of creative freedom with Nisa.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              consectetur egestas mauris adipiscing dui.{" "}
            </p>
            <Button
              text="Explore Section"
              pathname="/"
              bgColor="var(--secondary-color-blue)"
            />
          </div>
          <div className={styles.creative__photo_block}>
            <div className={styles.decor__photo}>
              <Image src={creativeDecorImg} alt="Decoration" />
            </div>
            <div className={styles.creative__photo_wrapper}>
              <div className={styles.photo__container}>
                <Image src={flowerPng} alt="Flower" />
              </div>
              <div className={styles.photo__content_block}>
                <h3>All Designers</h3>
                <p>TOTAL BALANCE</p>
                <span className={styles.decor__line}></span>
                <div className={styles.designers__block}>
                  <div className={styles.designers__photo}>
                    <div className={styles.designer__photo_wrapper}>
                      <div className={styles.designer__photo_container}>
                        <Image src={authorImg} alt="Designer Photo" />
                      </div>
                    </div>
                    <div className={styles.designer__photo_wrapper}>
                      <div className={styles.designer__photo_container}>
                        <Image src={designer2Photo} alt="Designer Photo" />
                      </div>
                    </div>
                    <div className={styles.designer__photo_wrapper}>
                      <div className={styles.designer__photo_container}>
                        <Image src={designer3Photo} alt="Designer Photo" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.designers__count}>
                    <p>3 Assignces</p>
                  </div>
                </div>
                <div className={styles.other__count}>
                  <p>24%</p>
                  <p>2M</p>
                </div>
                <div className={styles.progressbar}>
                  <span className={styles.progress}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.spotlight__section}>
        <div className={styles.spotlight__container}>
          <div className={styles.left_decor}>
            <DecorLeftSpotlightSectionIcon />
          </div>
          <div className={styles.right_decor}>
            <DecorRightSpotlightSectionIcon />
          </div>
          <h2>Put the spotlight on the main features</h2>
        </div>
      </section>
      <section className = {styles.video__block}>
        <div className = {styles.video__container}>
          <div className = {styles.video__block}>
            <Image src={videoPreloaderImg} alt="Video" fill={true} style={{objectFit: 'cover'}} sizes="100%"/>
          </div>
          <div className = {styles.player_block}>
            <PlayerIcon/>
          </div>
        </div>
      </section>
      <section className = {styles.marque__section}>
        <MarqueeBlock/>
      </section>
    </main>
  );
}
