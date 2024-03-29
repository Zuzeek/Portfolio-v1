import React, { Component } from 'react';
import Projects from './components/Projects'; 
import SocialProfiles from './components/SocialProfiles';
import profile from './assets/profile.jpg';
class App extends Component {

    state = { displayBio: false };

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('Component this', this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    
    render() {
        return (
            <div>
                <img 
                    src={ profile } 
                    alt='profile' 
                    className='profile' />
                <h1>Hello!</h1>
                <p>My name is Anna. I am a Software Developer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I am Java Developer, with a keen interest in dev ops, cloud and crypto.</p>
                            <p>I enjoy coding and learning new technologies. I love chess, puzzling and problem solving.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;