import {FC, CSSProperties} from 'react';
import "../component_styles/Aboutus.css";
import {Link} from "react-router-dom";

interface IPerson {
    name: string;
    role: string;
    image: string;
}

const TEAM: IPerson[] = [
    {
        name: "Elena Martinez",
        role: "Founder & CEO",
        image: "./people_team/Person1.png"
    },
    {
        name: "Raj Singh",
        role: "Chief Culinary Curator",
        image: "./people_team/Person2.png"
    },
    {
        name: "Sophia Dawson",
        role: "Director of Community Engagement",
        image: "./people_team/Person3.png"
    },
    {
        name: "Lucas Kim",
        role: "Head of Digital Strategy",
        image: "./people_team/Person4.png"
    },
    {
        name: "Aisha Abdi",
        role: "Marketing & Brand Manager",
        image: "./people_team/Person5.png"
    }
];


const TeamMemberBox: FC<IPerson> = (props: IPerson) => {
    return (
        <div className={"Team-member-box"}>
            <div className="Team-member-image">
                <img src={props.image} alt={props.name}/>
            </div>
            <b className="Team-member-name">{props.name}</b>
            <span className="Team-member-role">{props.role}</span>
        </div>
    );
};

enum TimelinePosition{
    UP, DOWN
}

interface ITimelineEvent {
    year: number;
    event: string;
}

const TIMELINE_EVENTS : ITimelineEvent[] = [
    {
        year: 2019,
        event: "Birth of DineEase"
    },
    {
        year: 2020,
        event: "Culinary Connections Made"
    },
    {
        year: 2021,
        event: "Curatorial Excellence Emerges"
    },
    {
        year: 2022,
        event: "Redefining Dining Landscape"
    },
    {
        year: 2023,
        event: "Redefining Dining Landscape"
    }
];

interface ITimelineEventBox {
    position: TimelinePosition;
    timelineEvent: ITimelineEvent;
}

const TimelineEvent: FC<ITimelineEventBox> = ({position, timelineEvent}) => {
    return (
        <div className={position === TimelinePosition.UP ? "Timeline-event Up"  : "Timeline-event Down"}>
            <div className="Timeline-event-year">{timelineEvent.year}</div>
            <div className="Timeline-event-line"></div>
            <div className="Timeline-event-name">{timelineEvent.event}</div>
        </div>
    );
};

const AboutUs: FC = () => {

    return (
        <section className="About-us-section">
            <section className="Timeline-section">
                <h1 className="Section-heading">About Us</h1>
                <h2 className="Section-subheading">Embracing the Joy of Dining</h2>
                <div className="Timeline">
                    <div className="Line">
                        <div className="Timeline-events" style={{"--grid-nums": TIMELINE_EVENTS.length } as CSSProperties}>
                            {
                                TIMELINE_EVENTS.map((event, index) =>{
                                    return(
                                        <TimelineEvent position={(index+1) % 2 === 0 ? TimelinePosition.UP : TimelinePosition.DOWN} timelineEvent={event} />
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>

            <section className="Team-section">
                <h1 className="Section-heading">Meet our team</h1>
                <h2 className="Section-subheading">The Culinary Visionaries Behind DineEase</h2>
                <div className="Team-member-boxes">
                    {
                        TEAM.map(person =>
                            <TeamMemberBox name={person.name} role={person.role} image={person.image}
                                           key={person.name}/>
                        )
                    }
                </div>
            </section>
            <section className="Connect-section">
                <h1 className="Section-heading">Connect with DineEase</h1>
                <p>Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story,
                    we're eager to hear from you. Dive deeper into the DineEase experience and let's make every meal
                    memorable.</p>
                <Link to={"/contact"}>Connect With Dineease</Link>
            </section>
        </section>
    );
};

export default AboutUs;