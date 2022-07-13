import React, { useState } from 'react';

const LandingBody = () => {
  const [email, setEmail] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 24,
        height: 356
      }}
    >
      <h2
        style={{
          fontSize: 60,
          color: '#101828'
        }}
      >
        Conscious Cares
      </h2>
      <div
        style={{
          width: 480,
          height: 260,
          fontSize: 20,
          color: '#344054'
        }}
      >
        <p
        >
  Get to know the platform that makes donating your money a breeze. Conscious aims to highlight the charities that make the most impact and gives you peace of mind about where your dollar is going.
        </p>
        <p
        >
          Sign up to get news about all things Conscious and be the first to know about where you can download our mobile application.
        </p>
      </div>
      <div>
      </div>

      <div id="mc_embed_signup" style={{display: 'flex', flexDirection:'row', justifyContent:'center',alignItems:'flex-start',padding:0,gap:16,width:474,height:48}}>
        <form
          style={{
            display: 'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            padding:0,
            gap:16,
            width:474,
            height:48,
            // border: '1px solid black'

          }}
          action={process.env.REACT_APP_EMAIL_SUBSCRIBE_ACTION}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input
            style={{
              display:'flex',
              fontSize: 16,
              flexDirection:'column',
              alignItems:'flex-start',
              paddingLeft:8,
              paddingTop: 0,
              paddingBottom: 0,
              border: '1px solid #D0D5DD',
              boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
              borderRadius: 8,
              // gap:6,
              width:360,
              height:48
            }}
            type="email"
            placeholder="Enter your email"
            onChange= { (e)=>setEmail(e.target.value) }
            value={email}
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
          <input
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              // padding: '16px 20px',
              // gap: 8,
              width: 98,
              height: 48,
              backgroundColor: '#125D56',
              color: '#FFFFFF',
              border: '1px solid #15B79E',
              borderRadius: 8
            }}
            type="submit"
            value="Sign Up"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </form>
      </div>

    </div>
  )
}

export { LandingBody }

