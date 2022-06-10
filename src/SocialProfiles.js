import { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
    render () {
        const { link, icon } = this.props.socialProfile; 

        return (
            <div style={{ display: "inline-block", width: 25, margin: 10 }}>
                <a href={link}>{link}</a>
                <img src={icon} alt='icon' style={{ width: 25, height: 25 }}></img>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render () {
        return (
            <div>
                <h3>Social Profiles</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles; 