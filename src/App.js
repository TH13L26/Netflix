import React, { useEffect, useState} from "react";
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from "./componentes/MovieRow";
import FeaturedMovie from "./componentes/FeaturedMovie";
import Header from "./componentes/Header";

export default () => {

  const[movieList, setMovieList] = useState([])
  const[featuredData, setFeaturedData] = useState(null);
  const [blackHeader,setBlackHeader] = useState(false);


  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
     



    }

    loadAll();
  }, []);

  useEffect(() =>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
    }
    
      window.addEventListener('scroll', scrollListener);

      return() => {
        window.removeEventListener('scroll', scrollListener);
      }

  }, []);

  return(
    <div className="page">

      <Header black={blackHeader} />

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
    }

      <section className="list">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Todos os direitos de imagem reservado para Netflix<br/>
        Dados pegos no Site themoviedb.org<br/>
        Aula UC 1 Senac - Lapa TITO / 2° Semestre PROA 2023.<br/>
        Feito por Talisson Santos.


      </footer>
    </div>
  );
}