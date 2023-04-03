import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }: any) {
  const router = useRouter();
  console.log(router);

  const handleClick = (id: number, title: string, overview: string) => {
    router.push(`/movies/${title}/${id}/${overview}`, `/movies/${title}`);
  };
  console.log(results);
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: any) => (
        // <Link
        //   key={movie.id}
        //   href={{
        //     pathname: `/movies/${movie.id}`,
        //     query: {
        //       title: movie.title,
        //       overview: movie.overview,
        //     },
        //   }}
        //   as={`/movies/${movie.title}`}>
          <div
            key={movie.id}
            onClick={() => handleClick(movie.id, movie.title, movie.overview)}
            className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.title}</h4>
          </div>
        // </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000//api/movies`)
  ).json();
  return {
    props: { results },
  };
}

// 라이브러리와 프레임워크 의 차이
// 라이브러리 는 개발자로서 내가 사용하는 것
// 내가 라이브러리를 불러와서 내가 직접 사용해서 무언가를 한다
//
// 프레임워크는 내 코드를 불러 온다.
// 개발자가 코드를 적절한 위치에 잘 적으면 프레임워크는 그 코드를 불러와서 동작시킨다
//
// 라이브러리를 사용할 때는, 개발자가 원하는 대로 코드를 작성 할 수 있고. 사용하고 싶을 때 사용할 수 있다.
// 리액트는 라이브러리 (폴더 or 파일 이름 맘데로 지어도 됨, 컴포넌트 파일 위치 내 맘데로 둬도 됨 ,다른 방법을 사용해서 랜더링 root를 바꿔도 됨)
//
// next.js는 프레임워크
// 특정한 규칙을 따라야 함. ReactDOM.render(document.getElementById("root")) 없음
// pages 안에서 만드는거 말고 다른짓 ㄴㄴ
