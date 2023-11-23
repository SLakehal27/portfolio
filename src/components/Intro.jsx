import selim from "../assets/img/Selim_LinkedIn.jpg"
export default function Intro(){
    return(
        <div className="grid grid-cols-2 gap-60">
            <div className="pt-12 pl-32">
                <div className="ml-1 flex flex-col gap-8
                    border-2 border-orange-800 p-10 rounded-md
                    bg-amber-500/30 dark:bg-sky-900/30
                    dark:border-indigo-900">
                    <h1 className="text-5xl dark:text-white">À propos</h1>
                    <p className="dark:text-white">Étudiant le jour, programmeur la nuit.<br></br> Je suis un étudiant en
                        génie logiciel de 2e année à Polytechnique Montréal.
                    </p>
                    <p className="dark:text-white">
                        Depuis 2021, je vise à développer mes compétences techniques et relationnelles <br></br>
                        afin d'être de découvrir toutes les nouvelles technologies possibles.
                    </p>
                </div>
            </div>
            <div id="my-image" className="pt-8 pr-32">
                    <img className = "rounded-md" src={selim}></img>
            </div>
        </div>


    )
}