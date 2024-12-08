
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f0f0;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .image_item {
      position: relative;
      width: 100%;
      max-width: 600px;
    }

    .img1 {
      position: absolute;
      width: 100%;
      opacity: 0;
      transition: opacity 2s ease-in-out; /* Smooth transition of opacity */
    }

    .img1 img {
      width: 100%;
      height: auto;
      display: block;
    }

    p {
      position: absolute;
      top: 10px;
      left: 10px;
      margin: 0;
      padding: 5px 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      border-radius: 5px;
    }

    /* Animation for smooth transitions with 20s visibility */
    @keyframes blinkImages1 {
      0%, 30% { opacity: 1; }  /* Image 1 fully visible for 30% (20s) */
      33%, 100% { opacity: 0; } /* Fade out from 33% */
    }

    @keyframes blinkImages2 {
      0%, 33% { opacity: 0; }  /* Image 2 hidden until 33% */
      36%, 63% { opacity: 1; } /* Show image 2 from 36% to 63% (20s) */
      66%, 100% { opacity: 0; } /* Fade out image 2 after 66% */
    }

    @keyframes blinkImages3 {
      0%, 66% { opacity: 0; }  /* Image 3 hidden until 66% */
      69%, 96% { opacity: 1; } /* Show image 3 from 69% to 96% (20s) */
      100% { opacity: 0; }      /* Hide image 3 at the end */
    }

    /* Apply animation to the images */
    .img1:nth-child(1) {
      animation: blinkImages1 66s infinite;
    }

    .img1:nth-child(2) {
      animation: blinkImages2 66s infinite;
    }

    .img1:nth-child(3) {
      animation: blinkImages3 66s infinite;
    }
  
