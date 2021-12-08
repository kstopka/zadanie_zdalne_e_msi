import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className="home">
            <h1>Cześć,</h1>
            <p>
                Chciałem dodać parę słów wstępu. Strona jest zrobiona w technologii React, której nadal się uczę.
                Stwierdziłem, iż zadania zrobię w ramach nauki właśnie w tej technologii. Nie do końca potrafiłem zrobić
                wszystkich zaleconych zadań. Włożyłem w te zadania trochę pracy, mimo iż zaplanowałem sobie tochę więcej
                czasu niż potrzebowałem to wyskoczyło mi pare prywatych spraw przez co nie wszystko jest skończone. Co
                do baz danych nie miałem za dużej styczności w połączeniu z frontendem, a tym bardziej MySQL. Samą
                technologię znam pod względem bazy danych - w przeszłości ze 2 projekty. Z mojej strony mogę jeszcze
                życzyć miłego dania i prosić oczywiście o feedback mojego kodu.
            </p>
        </div>
    );
};

export default Home;
