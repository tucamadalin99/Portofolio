import "./About.scss";

import { Wave } from 'react-animated-text';

export default function AboutPage() {
    return <div id="about">
        <div className="cmp-about">
            <div className="cmp-about__content">
                <h3 className="cmp-about__content-intro">
                    <Wave className="animated" effectDirection='up'
                    iterations={1} text="Hi, my name is" effect="verticalFadeIn" effectChange={2.2} />
                </h3>
                <h1 className="cmp-about__content-title">
                    <Wave className="animated" effectDirection='up'
                    iterations={1} text="Tuca Madalin" effect="verticalFadeIn" effectChange={2.2} />
                </h1>
                <p className="cmp-about__content-paragraph">
                    And I am a passionate web developer,
                    constantly trying to improve and keep up with the latest
                    technologies and practices in web development,
                    as well as in software development in general.
                </p>
                <p className="cmp-about__content-paragraph desktop">
                    Besides programming, I also have a passion for music.
                    Either playing the guitar, or trying to record beats with my MIDI keyboard.
                </p>
                <p className="cmp-about__content-paragraph desktop">
                    Also a big techie...in love for all things digital.
                </p>
            </div>
        </div>
    </div>
}