import Image from "next/image";


const Cards = ({}) => {
  return (<>
        <div>
            <image
                height={10}
                width={10}
                src ="code.svg"
            />
            <p>Code Snippets</p>
            <h2>
                Store and organize code snippets with syntax highlighting
            </h2>
        </div>
  
  
  </>);
};

export default Cards;
