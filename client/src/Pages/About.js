import React from 'react';
import {Translate, withLocalize} from 'react-localize-redux';
import {Transition} from 'react-transition-group';
import Base from '../Components/Base';

class About extends React.Component {
    render() {
        return (
            <Base>
                <Transition timeout={100} in={true} appear>
                    {(status => (
                        <div className={"main about-content " + status}>
                            <div className="about-block">

                                <h3><Translate id="content.about.headline">Our songs seem very simple, but the sense we
                                    put into the lyrics is strong.</Translate></h3>
                                <Transition timeout={700} in={true} appear>
                                    {(status => (
                                        <p className={status}><Translate id="content.about.content-p1">Nietzsche Plakal is an indie-rock
                                            band
                                            formed in 2018 in Kharkiv, Ukraine. The band brings up
                                            existential issues of the young generation. Nietzsche Plakal often performs
                                            on the
                                            streets so that
                                            anyone can hear them. The band is going to get to your ears even if you are
                                            just
                                            shopping or
                                            walking with your dog.</Translate></p>
                                    ))}
                                </Transition>
                                <Transition timeout={1000} in={true} appear>
                                    {(status => (
                                <p className={status}><Translate id="content.about.content-p2">Nietzsche described the superhuman as a
                                    supreme creature, superior to a man as much as a man
                                    surpasses a monkey. Nietzsche himself remained an ordinary person. So we sing and
                                    play about the
                                    daily routine of an ordinary human life, about an unattainable desire for something
                                    higher.
                                    Nietzsche Plakal (Plakal means cried in English) and we
                                    cry and laugh with him.</Translate></p>
                                    ))}
                                </Transition>
                            </div>
                        </div>
                    ))}
                </Transition>
            </Base>
        )
    };
}

export default withLocalize(About);