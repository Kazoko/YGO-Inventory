const CSS = ElectronCSS.CSS;
const color = ElectronCSS.color;

const someStyle = CSS({
    color: color.red
});

class MyComp extends React.Component {
    render() {
        return <div className={someStyle}>
            Hello World !
        </div>;
    }
}

ReactDOM.render(
  <MyComp />,
  document.getElementById('container')
);