import React from 'react';
import ImgComponent from './ImgComponent';
import './component.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class MainVideo extends React.Component {
  componentDidMount() {
    setInterval(this.goRight, 7000);
  }
  goRight = () => {
    if (this.state.x <= -200) {
      //   e.currentTarget.disabled = true;
      this.setState({ x: 0 });
    } else {
      this.setState(
        (prevState) => ({ x: prevState.x - 100 }),
        () => console.log(this.state.x)
      );
    }
  };
  goLeft = (e) => {
    if (this.state.x >= 0) {
      e.currentTarget.disabled = true;
    } else {
      this.setState(
        (prevState) => ({ x: prevState.x + 100 }),
        () => console.log(this.state.x)
      );
    }
  };

  state = {
    x: 0,
  };
  render() {
    const { x } = this.state;
    let sliderArr = [
      <ImgComponent
        src={'https://wallpaperplay.com/walls/full/0/c/e/240835.jpg'}
      />,
      <ImgComponent src={'https://wallpapercave.com/wp/wp1917128.jpg'} />,
      <ImgComponent src={'https://wallpaperaccess.com/full/1450647.jpg'} />,
      <ImgComponent src={'https://wallpapercave.com/wp/wp5993832.png'} />,
      <ImgComponent
        src={'https://wallpaperplay.com/walls/full/0/c/e/240835.jpg'}
      />,
      <ImgComponent
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2Jo3QZmTxRdZujkTgpgVllDI8VydLo4lWZ5Kcof3hyehU_CEA&usqp=CAU'
        }
      />,
      <ImgComponent
        src={'https://wallpaperplay.com/walls/full/0/c/e/240835.jpg'}
      />,
      <ImgComponent src={'https://wallpapercave.com/wp/wp1917154.jpg'} />,
    ];

    return (
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
        <span onClick={this.goRight} className="goRight">
          <ArrowForwardIosIcon style={{ fontSize: '100px' }} />
        </span>
        <span onClick={this.goLeft} className="goLeft">
          <ArrowBackIosIcon style={{ fontSize: '100px' }} />
        </span>
      </div>
    );
  }
}

export default MainVideo;
