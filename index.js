setInterval(() => {
    // Fetch date
    indexDate = new Date();
    hTime = indexDate.getHours();
    mTime = indexDate.getMinutes();
    sTime = indexDate.getSeconds();

    // Calculate rotation
    hRotation = (30*hTime) + (mTime/2);
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    // Rotate css elements
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);
