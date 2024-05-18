import Link from 'next/link';


export default function About() {
  return (
      <div className='text-sm' style={{ margin: 'auto', maxWidth:'65%', marginTop: '2%' }}>
        <p>
          Good math problems are hidden inside textbooks and online documents. To keep up with all the sources in the world is hard. For someone who just wants to continuously solve problems, finding and going through all the sources feels like a hassle. I wished for a website that could just dump all the math problems available in the world out there. And if I could filter the problems by topics, that would be beautiful.
        </p>
        <br/>
        <p>
          teachyourselfmath is a side project that was born out of this need. At its core, it is a math PDF extraction engine. The engine has some machine learning going on behind the scenes to extract math problems in LaTeX from any image or document.
        </p>
        <br/>
        <p>
          A little bit about me: I am Vivek, a software engineer based out of India with a diverse set of interests including math. This project is close to my heart for many different reasons and nothing would make me happier than finding people on the internet who would find this website to be useful.
        </p>
        <br/>
        <p>
          If this website appeals to the math nerd inside you, I would love to <a href="https://tally.so/r/w2PxRV" style={{ textDecoration: 'underline' }}>hear your feedback</a>.
        </p>
        <br/>
        <p>
          I am also running a <Link href="https://t.me/teachyourselfmath" style={{ textDecoration: 'underline' }}>small telegram community</Link> of math nerds who would like to discuss all things math, as well as talk about upcoming features and feedback for the website.
        </p>
        <br/>
        <p>
          And, of course, this project is <Link href="https://github.com/viveknathani/teachyourselfmath" style={{ textDecoration: 'underline' }}>open-sourced</Link>. Feel free to contribute to the project!
        </p>        
        <br/>
        <p>
          Have fun!
        </p>     
        
        <p>
          - Vivek
        </p>
      </div>
  );
}