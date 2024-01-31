import React, { useEffect, useState } from 'react'
// import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar'

// Components

import style from "./style.css";
import Navbar from "../../components/header/Header2"
import { Link } from 'react-router-dom';
export default function GenerateVideo() {

  const windows = ['scriptInputs', 'scriptModification', 'mediaSelection', 'cutomMediaUploading'];
  const [currentWindow, setCurrentWindow] = useState(0);
  const [mode, setMode] = useState("url_pass");
  const [scriptStyle, setScriptStyle] = useState("formal");
  const [userInput, setUserinput] = useState();
  const [videoOrientation, setVideoOrientaion] = useState();
  const [generatedScript, setGeneratedScript] = useState();
  const [scriptChangePrompt, setScriptChangePrompt] = useState("");
  const [subtitle, setSubtitle] = useState("1");
  const [audios, setAudios] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState("Andrew");
  const [backgroundType, setBackGroundType] = useState();
  const [progress, setProgress] = useState(0)
  const backs = ['1MvnT4DyKDM5I-ere_G9DsFUBlJ0xBxi7', '1Qh2mrlrGe_ft5G2Toc3JzF9gp6ceCPLb', '1k2whu9cknBLdORrG2doWzRR22DcHQhVU', '1cqe2KoBmI9BePprwa6XC9xvtkoeX_5To', '1zioxvIbSQ80gWLd0TLpe0OWYeVZpE8XN']
  const cloudinaryLinks=['https://res.cloudinary.com/dkisppdc7/video/upload/v1705241131/Box_Grid_irxeqh.mp4','https://res.cloudinary.com/dkisppdc7/video/upload/v1705241133/Black_Topography_lvqmw7.mp4','https://res.cloudinary.com/dkisppdc7/video/upload/v1705241134/Arcane_Inferno_m12ogz.mp4','https://res.cloudinary.com/dkisppdc7/video/upload/v1705241131/Red_Flame_mbaarr.mp4','https://res.cloudinary.com/dkisppdc7/video/upload/v1705241132/Black_Paper_Texture_vhnhlx.mp4']
  const generateScript = async () => {
    setProgress(10)
    const data = { url:userInput, genre: scriptStyle,contentorurl:mode };
    setProgress(60)
    // const response= await axiosInstance.post('/generatescript/',JSON.stringify(data),{headers:{"Content-Type":"application/json"}});
    const response = await axios.post('http://127.0.0.1:8000/posttest/', JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
    console.log(response);
    setProgress(90)
    setGeneratedScript(response.data);
    setProgress(100)
    
  }

  const makeChangesForScript = async () => {
    const data = { result: generatedScript, changes: scriptChangePrompt };
    // const response=await axiosInstance.post('/modifyscript/',JSON.stringify(data),{headers:{"Content-Type":"application/json"}});
    const response = await axios.post('http://127.0.0.1:8000/modifyscript/', JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
    console.log(response);
    setGeneratedScript(response.data);
    setScriptChangePrompt("");
  }

  const fetchAudios = async () => {
    const response = await axios.get('http://127.0.0.1:8000/getaudios/', { headers: { "Content-Type": "application/json" } });
    console.log(response);
    setAudios(response.data);

  }

  const getVideo = async () => {
    const data = {
      script: generatedScript,
      backgroundType,
      subtitle,
      selectedAudio,
      backgroundType
    }
    const config = {
      headers: { "content-type": "application/json" }
    }
    const response = await axios.post('http://127.0.0.1:8000/generatevideo/', data, config)
    console.log(response);
  }

  useEffect(() => {
    if (currentWindow == 2) {
      fetchAudios();
    }
  }, [currentWindow])

  return (
    <>
    
     <Navbar/>
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      <div>
      <h1>Get your video </h1>
        {currentWindow === 0 ? <div>

          {/* Flowbite */}
          <div className="buttonGroup">
          <div className="text">
              <p>Select Script Type</p>
            </div>
            <div className="buttons">
              <button
                className={`inline-block rounded border px-12 py-3 text-sm font-medium focus:outline-none focus:ring ${mode === 'prompt'
                  ? 'text-white bg-indigo-600'
                  : 'text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white active:bg-indigo-500'
                  }`}
                onClick={() => {
                  setMode('url_pass');
                }}
              >
                URL
              </button>

                
              <button
                className={`inline-block rounded border px-12 py-3 text-sm font-medium focus:outline-none focus:ring ${mode === 'script'
                  ? 'text-white bg-indigo-600'
                  : 'text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white active:bg-indigo-500'
                  }`}
                onClick={() => {
                  setMode('content_pass');
                }}
              >
                Script
              </button>
            </div>

           
            
          </div>


          {/* <div class="flex space-x-4 justify-center mt-4">
            <div class="flex items-center p-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-3" type="radio" value="prompt" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={mode === "prompt"} onChange={(e) => setMode(e.target.value)} />
              <label for="bordered-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prompt</label>
            </div>
            <div class="flex items-center px-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-radio-4" type="radio" value="script" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={mode === "script"} onChange={(e) => setMode(e.target.value)} />
              <label for="bordered-radio-4" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Script</label>
            </div>
          </div> */}

              <div class="flex flex-col items-center">
                <div class="m-4 w-96">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter {mode}</label>
                  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => setUserinput(e.target.value)}></textarea>
                </div>

                {mode === "prompt" &&
                  <div class="m-4 w-96">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Script Style</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={scriptStyle}
                      onChange={e => setScriptStyle(e.target.value)}>
                      <option selected>Formal</option>
                      <option value="US">Casual</option>
                      <option value="CA">Explainer</option>
                      <option value="FR">Accent</option>
                    </select>
                  </div>
                }

<div className="banner-btn-two">
                                    <button onClick={() => generateScript()} className="gradient-btn gradient-btn-three wow fadeInLeft" data-wow-delay=".6s">Submit</button>
                
                                </div>

                {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => generateScript()}>Submit</button> */}
                {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setCurrentWindow(2)}>Next window</button> */}
              </div>

          {/* Original */}

          {/* <input type='radio' value="prompt" checked={mode === "prompt"} onChange={(e) => setMode(e.target.value)} />
        <label>Prompt</label>
        <input type='radio' value="script" checked={mode === "script"} onChange={(e) => setMode(e.target.value)} />
        <label>Script</label>
        <br />

        <input type='radio' value="portrait" checked={videoOrientation === "portrait"} onChange={(e) => setVideoOrientaion(e.target.value)} />
        <label>Portriat</label>
        <input type='radio' value="landscape" checked={videoOrientation === "landscape"} onChange={(e) => setVideoOrientaion(e.target.value)} />
        <label>Landscape</label>
        {mode === "script" ? <p>Script</p> : <p>Prompt</p>}
        <textarea onChange={(e) => setUserinput(e.target.value)} />
        {mode === "prompt" ? <><p>Script Style</p><select
          value={scriptStyle}
          onChange={e => setScriptStyle(e.target.value)} // ... and update the state variable on any change!
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="explainer">Explainer</option>
          <option value="accent">Accent</option>
        </select></> : null}
        <button onClick={() => generateScript()}>Submit</button>
        <button onClick={() => setCurrentWindow(2)}>3</button> */}
        </div> : null}


        {/* ################### */}
        {currentWindow == 1 && (
          <>
            <div className="flex justify-center mt-8">
              {generatedScript && (
                <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                  <h5 className="text-xl font-medium text-gray-700 mb-4 text-center">Generated Script</h5>
                  <textarea
                    id="OrderNotes"
                    className="w-full h-80 p-4 rounded-lg border-gray-200 shadow-sm text-sm"
                    placeholder="Enter any additional order notes..."
                    value={generatedScript.Script}
                    onChange={(e) => {
                      setGeneratedScript((prevScript) => ({
                        ...prevScript,
                        Script: e.target.value,
                      }));
                    }}
                  ></textarea>
                </div>
              )}
            </div>

            <div className="flex justify-center items-center mt-8">
              <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                <h5 className="text-xl font-medium text-gray-700 mb-4 text-center">Enter Prompt</h5>
                <textarea
                  className="w-full h-30 p-4 rounded-lg border-gray-200 shadow-sm text-sm"
                  placeholder="Enter prompt to modify script"
                  value={scriptChangePrompt}
                  onChange={(e) => setScriptChangePrompt(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                onClick={() => makeChangesForScript()}
              >
                Submit
              </button>

              <button
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 ml-4"
                onClick={() => { setCurrentWindow(2) }}
              >
                Next Step
              </button>
            </div>

          </>
        )
        }


        {/* ########################### */}

        {currentWindow == 2 &&
          <div>
            <div className='subtitles'>
              <p>Subtitles</p>
              <div className="subtitle-row">
                <video
                  onClick={() => setSubtitle("1")}
                  src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4'
                  className={subtitle === "1" ? 'selected' : ''}
                  loop muted autoPlay
                ></video>
                <video
                  onClick={() => setSubtitle("2")}
                  src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4'
                  className={subtitle === "2" ? 'selected' : ''}
                  loop muted autoPlay
                ></video>
                <video
                  onClick={() => setSubtitle("3")}
                  src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4'
                  className={subtitle === "3" ? 'selected' : ''}
                  loop muted autoPlay
                ></video>
              </div>
            </div>

            <div className="text">
              <p>Select Audio</p>
            </div>
            <div className='audios-container'>
              <div className='audios'>
                {audios.map((audio) => (
                  <div key={audio.name} className='audios-item'>
                    <div className="checkBoxDiv">
                      <input type='checkbox' checked={audio.name === selectedAudio} onChange={() => setSelectedAudio(audio.name)} />
                      <label>{audio.name}</label>
                    </div>
                    <audio controls>
                      <source src={audio.audio_sample} type="audio/wav" />
                    </audio>
                  </div>
                ))}
              </div>
            </div>


            <div className="text">
              <p>Select Background</p>
            </div>
            <div className='backgrounds'>
              <div className="video-grid">
                {backs.map((back, index) => (
                  <div key={index} className="video-item">
                    <video
                      onClick={() => setBackGroundType(back)}
                      src={cloudinaryLinks[index]}
                      className={backgroundType === back ? 'selected' : ''}
                      loop muted autoPlay
                    ></video>
                  </div>
                ))}
              </div>
              <div className="button-container">
                <button className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 ml-4" onClick={() => getVideo()}>Get Video</button>
              </div>
            </div>


          </div>
        }

        {/* {
          currentWindow == 2 ? <div>
            <div className='subtitles'>
              <p>Subtitles</p>
              <video onClick={() => setSubtitle("1")} src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4' style={subtitle === "1" ? { height: 200, margin: 5, border: '5px solid black' } : { height: 200, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setSubtitle("2")} src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4' style={subtitle === "2" ? { height: 200, margin: 5, border: '5px solid black' } : { height: 200, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setSubtitle("3")} src='https://cdn.coverr.co/videos/coverr-a-female-video-editor-is-checking-her-social-media-5063/1080p.mp4' style={subtitle === "3" ? { height: 200, margin: 5, border: '5px solid black' } : { height: 200, margin: 5 }} loop muted autoPlay></video>
            </div>
            <div className='audios'>
              {audios.map((audio) => {
                return <>
                  <input type='checkbox' checked={audio.name == selectedAudio} onChange={() => setSelectedAudio(audio.name)} />
                  <label>{audio.name}</label>
                  <audio controls>
                    <source src={audio.audio_sample} type="audio/wav" />
                  </audio>
                </>
              })}
            </div>
            <div className='backgrounds'>
              <h3>Select Background</h3>
              <video onClick={() => setBackGroundType(backs[0])} src="https://drive.google.com/uc?export=download&id=1MvnT4DyKDM5I-ere_G9DsFUBlJ0xBxi7" style={backgroundType === backs[0] ? { height: 300, margin: 5, border: '5px solid black' } : { height: 300, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setBackGroundType(backs[2])} src="https://drive.google.com/uc?export=download&id=1k2whu9cknBLdORrG2doWzRR22DcHQhVU" style={backgroundType === backs[2] ? { height: 300, margin: 5, border: '5px solid black' } : { height: 300, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setBackGroundType(backs[4])} src="https://drive.google.com/uc?export=download&id=1zioxvIbSQ80gWLd0TLpe0OWYeVZpE8XN" style={backgroundType === backs[4] ? { height: 300, margin: 5, border: '5px solid black' } : { height: 300, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setBackGroundType(backs[3])} src="https://drive.google.com/uc?export=download&id=1cqe2KoBmI9BePprwa6XC9xvtkoeX_5To" style={backgroundType === backs[3] ? { height: 300, margin: 5, border: '5px solid black' } : { height: 300, margin: 5 }} loop muted autoPlay></video>
              <video onClick={() => setBackGroundType(backs[1])} src="https://drive.google.com/uc?export=download&id=1Qh2mrlrGe_ft5G2Toc3JzF9gp6ceCPLb" style={backgroundType === backs[1] ? { height: 300, margin: 5, border: '5px solid black' } : { height: 300, margin: 5 }} loop muted autoPlay></video>


              <button onClick={() => getVideo()}>Get Video</button>

            </div>
          </div> : null
        } */}
      </div >
    </>
  )
}
