import React from 'react';
import AdventCalendarDoor from './AdventCalendarDoor';
import './App.css';


const AdventCalendar = () => {
  const currentDate = new Date();
//  const currentDay = currentDate.getDate();
  const currentDay = 25;
  // Tableau des chaînes de caractères pour chaque porte
  const doorTexts = [
    "Qu’il fait doux en cette fin d’automne sur cette terrasse en pierre de ce petit mas ardéchois. De l’air frais qui remonte de la combe du Renard. Quelques bougies sont allumées pour éclairer les sourires.",
    "Les flammes dansent et projettent leur lumière et leur chaleur sur les cœurs et les visages. Les verres tintent, les couteaux grattent les assiettes. Il fait bon, et il y a encore du fromage.",
    "Une légère brise se lève. On s’amuse à débattre : est-ce le mistral, la tramontane ? Peut-être bien le sirocco, ça a l’air de venir du Sud ? Personne n’est d’accord, mais ce n’est pas grave.",
    "La nuit est maintenant bien sombre et l’ivresse commence à se faire sentir. A l’orée de la sapinière qui couvre le flanc de la colline avoisinante, un bruissement agite les branches les plus basses…",
    "Un chevreuil surgit et surprend tout le monde. Il se dresse sur ses pattes arrière puis fait mine de charger les badauds. Sa carrure est impressionnante et il semble ne pas toucher le sol.",
    "Derrière lui apparaît un vieil homme barbu muni d’une grande perche. Il la place au-dessus des bougies et celle-ci s’embrase comme une torche. D'un saut, il enfourche le chevreuil.",
    "La bête parcourt l’assistance du regard avec ses yeux bleus et brillants comme des billes. Puis dans un élan sauvage, il s’envole en suivant le vent, vers le Nord.",
    "Le duo survole l’Europe, et allume toutes les mèches de tous les lampions de toutes les villes et de tous les villages, diffusant lumière et chaleur dans les cœurs des habitants.",
    "Portés par les alizées, l’homme et le chevreuil poursuivent leur vol, et se retrouvent à présent au-dessus de l’Afrique. Ils allument les feux des campements touaregs et des villages Masaï.",
    "Maintenant slalomant entre les montagnes Himalayennes, ils propagent la flamme dans les autels Népalais, et allument les mèches des feux d’artifices chinois. Ils mettent le cap vers l'océan…",
    "Pour enfin se retrouver au-dessus du Canada. Ils allument les feux de tous les igloos, embrasent les foyers de tous les chalets, survolent Montréal, le Saint-Laurent, puis enfin l’île du Prince Édouard…",
    "… Pour finalement faire face, à quelques lieues de la côte, à une terrible catastrophe. Un pétrolier échoué se vide de son sang noir dans l’océan. Les oiseaux emmazoutés hurlent leur agonie.",
    "Le vieil homme et le chevreuil ne savent que faire. Plus démunis que jamais, ils volent en cercle au-dessus de l’épave, hébétés. Leur volonté est mise à l’épreuve. Ils parviennent pourtant à ne point rompre.",
    "Au fond de sa sagesse, le vieil homme se plante le nez au ciel, et fixe les étoiles. Une de celle-ci brille et vibre différemment. Il chuchote à l’oreille de sa monture, et ceux-ci s’élancent dans sa direction.",
    "Ils rejoignent alors cette lumière. C’est une étoile naissante, qui souhaite elle aussi propager son énergie. Le petit astre fusionne alors avec la flamme de la perche du vieil homme.",
    "L’homme et sa monture s’engagent alors dans un voyage intersidéral, et allument tous les cœurs extraterrestres de la galaxie, grâce à la puissance renouvelée de leur flamme.",
    "Désireux de propager toujours plus loin leur feu, l’homme et l’animal parviennent à synergiser leur flamme avec les étoiles. Ils allument maintenant tous les trous noirs de l’univers. ",
    "Après avoir embrasé tout ce qui pouvait l’être dans l’univers, ils se dirigent naturellement vers la Terre. En se retrouvant au-dessus du Monde, ils le contemplent alors comme si c’était la première fois.",
    "Ils sont encore assez loin de cette orange bleue, et distinguent à peine sa révolution constante, mécanique comme une horloge. Ils se rapprochent progressivement, jusqu’à atteindre l’atmosphère.",
    "Maintenant assez proches pour distinguer la vie, ils sont frappés par ce qu’ils observent : devenus maîtres dans le maniement de la flamme, ils la reconnaissent dans le cœur de tous les hommes.",
    "Le vieil homme et le chevreuil n’ont pourtant pas oublié l’épave polluante. Ils se retournent vers le soleil, immobile comme au solstice. La solution s’impose. Le monde qu’ils doivent vraiment changer se trouve sous leurs pieds et sabots.",
    "Ils descendent alors sur Terre, et en quelques tours de planète, ils mobilisent tous les cœurs êtres vivants. Des chalutiers partent de tous les ports, les calamars géants et les bancs de dauphins réunissent des filets abandonnés dans les océans.",
    "Dans un effort commun sans précédent, toutes les formes de vie agissent de concert, et parviennent non seulement à retirer tout le pétrole et les plastiques des océans, mais les biodégradent et les dispersent afin de régénérer tous les écosystèmes de la planète.",
    "Leur mission accomplie, l'homme et le chevreuil s’envolent au loin, laissant là la perche enflammée. La flamme se divise en milliards d'étincelles qui s’éparpillent dans le ciel. La plus brillante d’entre elle fuse vers Lyon, et s’engouffre dans un fenêtre du 40 rue de la Claire. Elle choisira son prochain refuge dans le cœur d’une jolie militante, qui l’accueillera avec la promesse qu’elle poursuivra sa mission.",
  ];
  
  

  return (
    <div className="advent-calendar">
      
        <div className="door-container">
          {[...Array(24).keys()].map((day) => (
            <AdventCalendarDoor key={day} day={day + 1} currentDay={currentDay} doorText={doorTexts[day]} />
          ))}
        </div>
      </div>
  );
};

export default AdventCalendar;
