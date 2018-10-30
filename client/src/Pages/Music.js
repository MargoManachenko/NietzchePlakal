import React from 'react';
// import ReactModPlayer from '../Components/ModAutoplayer';
import Base from '../Components/Base';
import AudioTrack from '../Components/AudioTrack'

const Music=()=>(
  <Base>
      <div className="main music-content">
          <h1>Music</h1>
          <div className="songs-center">
              <div className="songs">
                  <div className="song">
                      {/*<ReactModPlayer/>*/}
                      {/*<Audio/>*/}
                      {/*<MusicPlayer playlist={playlist} />*/}
                      {/*<ReactPlayer url='http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3' controls="true" />*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">1. Venom</p>*/}
                  </div>
                  <div className="song">
                      {/*<MusicPlayer playlist={playlist} />*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">2. Violet wood</p>*/}
                      <AudioTrack/>
                  </div>
                  <div className="song">
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">3. Money</p>*/}
                      <AudioTrack/>
                  </div>
                  {/*<div className="song">*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">4. Get out</p>*/}
                  {/*</div>*/}
                  {/*<div className="song">*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">5. Bells</p>*/}
                  {/*</div>*/}
                  {/*<div className="song">*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">6. Weekdays</p>*/}
                  {/*</div>*/}
                  {/*<div className="song">*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">7. Emerald eyes</p>*/}
                  {/*</div>*/}
                  {/*<div className="song">*/}
                      {/*<img className="song-cover" src="https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec1ecefddebe708d9f122e4ef5372b04&auto=format&fit=crop&w=1950&q=80"/>*/}
                      {/*<p className="song-name">8. Sh*t</p>*/}
                  {/*</div>*/}
              </div>
          </div>

      </div>
  </Base>
);

export default Music;