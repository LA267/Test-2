/*
  HIER DEINEN FRAGENPOOL EINTRAGEN.

  correct: 0 = erste Antwort
  correct: 1 = zweite Antwort
  correct: 2 = dritte Antwort
  correct: 3 = vierte Antwort

  Das Lösungswort hat mit diesen Fragen NICHTS zu tun.

  Bei jedem neuen Laden werden zufällig
  20 Fragen aus diesem Pool ausgewählt.
*/

const questionPool = [
  {
    question: "Welches Gas nehmen Pflanzen hauptsächlich aus der Luft auf?",
    answers: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Wasserstoff"],
    correct: 2
  },
  {
    question: "Welcher Planet ist der Sonne am nächsten?",
    answers: ["Venus", "Merkur", "Mars", "Erde"],
    correct: 1
  },
  {
    question: "Wie viele Kontinente gibt es üblicherweise nach dem Sieben-Kontinente-Modell?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "Was ist die Hauptstadt von Kanada?",
    answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correct: 2
  },
  {
    question: "Welches Organ pumpt Blut durch den menschlichen Körper?",
    answers: ["Lunge", "Leber", "Niere", "Herz"],
    correct: 3
  },
  {
    question: "Welches chemische Symbol steht für Gold?",
    answers: ["Ag", "Au", "Go", "Gd"],
    correct: 1
  },
  {
    question: "Wer schrieb das Drama „Faust“?",
    answers: ["Friedrich Schiller", "Johann Wolfgang von Goethe", "Heinrich Heine", "Thomas Mann"],
    correct: 1
  },
  {
    question: "Welcher Ozean ist der größte der Erde?",
    answers: ["Atlantischer Ozean", "Indischer Ozean", "Arktischer Ozean", "Pazifischer Ozean"],
    correct: 3
  },
  {
    question: "Wie viele Seiten hat ein Würfel?",
    answers: ["4", "6", "8", "12"],
    correct: 1
  },
  {
    question: "In welchem Land stehen die Pyramiden von Gizeh?",
    answers: ["Mexiko", "Ägypten", "Jordanien", "Griechenland"],
    correct: 1
  },
  {
    question: "Welche Einheit wird für elektrische Spannung verwendet?",
    answers: ["Watt", "Ampere", "Volt", "Ohm"],
    correct: 2
  },
  {
    question: "Welches Tier ist das größte heute lebende Tier der Erde?",
    answers: ["Afrikanischer Elefant", "Blauwal", "Walhai", "Giraffe"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2
  },
  {
    question: "Wie heißt der natürliche Satellit der Erde?",
    answers: ["Titan", "Europa", "Mond", "Phobos"],
    correct: 2
  },
  {
    question: "Welches Metall ist bei normaler Raumtemperatur flüssig?",
    answers: ["Eisen", "Quecksilber", "Aluminium", "Kupfer"],
    correct: 1
  },
  {
    question: "Wer malte die Mona Lisa?",
    answers: ["Michelangelo", "Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh"],
    correct: 2
  },
  {
    question: "Welches Land hat die Form eines Stiefels?",
    answers: ["Portugal", "Italien", "Kroatien", "Griechenland"],
    correct: 1
  },
  {
    question: "Wie viele Minuten hat eine Stunde?",
    answers: ["50", "60", "70", "100"],
    correct: 1
  },
  {
    question: "Welche Farbe entsteht beim Mischen von Blau und Gelb?",
    answers: ["Orange", "Violett", "Grün", "Rot"],
    correct: 2
  },
  {
    question: "Was ist H2O?",
    answers: ["Sauerstoff", "Wasser", "Salz", "Wasserstoff"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Frankreich?",
    answers: ["Lyon", "Marseille", "Paris", "Bordeaux"],
    correct: 2
  },
  {
    question: "Welcher Planet ist für seine auffälligen Ringe bekannt?",
    answers: ["Mars", "Saturn", "Venus", "Merkur"],
    correct: 1
  },
  {
    question: "Welches Land grenzt direkt an Deutschland?",
    answers: ["Spanien", "Italien", "Polen", "Ungarn"],
    correct: 2
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Japan?",
    answers: ["Kyoto", "Osaka", "Tokio", "Nagoya"],
    correct: 2
  },
  {
    question: "Welches Blutgefäß transportiert Blut vom Herzen weg?",
    answers: ["Arterie", "Vene", "Kapillare", "Lymphgefäß"],
    correct: 0
  },
  {
    question: "Welcher Kontinent ist flächenmäßig der größte?",
    answers: ["Afrika", "Europa", "Asien", "Nordamerika"],
    correct: 2
  },
  {
    question: "Welches Instrument hat typischerweise 88 Tasten?",
    answers: ["Klavier", "Violine", "Trompete", "Flöte"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von den Sternen und Himmelskörpern?",
    answers: ["Geologie", "Astronomie", "Biologie", "Meteorologie"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    answers: ["Barcelona", "Madrid", "Sevilla", "Valencia"],
    correct: 1
  },
  {
    question: "Welches Element hat das chemische Symbol O?",
    answers: ["Gold", "Osmium", "Sauerstoff", "Silber"],
    correct: 2
  },
  {
    question: "Wer komponierte die 9. Sinfonie mit der „Ode an die Freude“?",
    answers: ["Mozart", "Bach", "Beethoven", "Wagner"],
    correct: 2
  },
  {
    question: "Welcher Fluss fließt durch London?",
    answers: ["Seine", "Themse", "Donau", "Rhein"],
    correct: 1
  },
  {
    question: "Welches Tier ist für seine schwarz-weißen Streifen bekannt?",
    answers: ["Zebra", "Giraffe", "Gepard", "Antilope"],
    correct: 0
  },
  {
    question: "Was ist die Hauptstadt von Griechenland?",
    answers: ["Athen", "Sparta", "Thessaloniki", "Patras"],
    correct: 0
  },
  {
    question: "Wie viele Tage hat ein Schaltjahr?",
    answers: ["364", "365", "366", "367"],
    correct: 2
  },
  {
    question: "Welches Organ ist hauptsächlich für den Gasaustausch beim Menschen zuständig?",
    answers: ["Magen", "Lunge", "Leber", "Bauchspeicheldrüse"],
    correct: 1
  },
  {
    question: "Welche Sprache wird hauptsächlich in Brasilien gesprochen?",
    answers: ["Spanisch", "Portugiesisch", "Französisch", "Englisch"],
    correct: 1
  },
  {
    question: "Welches ist das härteste natürliche Material?",
    answers: ["Quarz", "Granit", "Diamant", "Eisen"],
    correct: 2
  },
  {
    question: "Was ist die Hauptstadt von Österreich?",
    answers: ["Salzburg", "Graz", "Wien", "Linz"],
    correct: 2
  },
  {
    question: "Wie nennt man Tiere, die ausschließlich Pflanzen fressen?",
    answers: ["Karnivoren", "Herbivoren", "Omnivoren", "Insektivoren"],
    correct: 1
  },
  {
    question: "Welcher Planet wird auch als „Roter Planet“ bezeichnet?",
    answers: ["Jupiter", "Mars", "Venus", "Neptun"],
    correct: 1
  },
  {
    question: "In welcher Einheit wird elektrische Leistung gemessen?",
    answers: ["Volt", "Watt", "Ampere", "Ohm"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Italien?",
    answers: ["Mailand", "Neapel", "Rom", "Turin"],
    correct: 2
  },
  {
    question: "Welcher Teil einer Pflanze nimmt hauptsächlich Wasser aus dem Boden auf?",
    answers: ["Blüte", "Blatt", "Wurzel", "Frucht"],
    correct: 2
  },
  {
    question: "Wer schrieb „Romeo und Julia“?",
    answers: ["Charles Dickens", "William Shakespeare", "Oscar Wilde", "George Orwell"],
    correct: 1
  },
  {
    question: "Welche Währung wird in Japan verwendet?",
    answers: ["Won", "Yuan", "Yen", "Rupie"],
    correct: 2
  },
  {
    question: "Wie viele Zähne hat ein erwachsener Mensch normalerweise einschließlich Weisheitszähnen?",
    answers: ["28", "30", "32", "36"],
    correct: 2
  },
  {
    question: "Welches Meer liegt zwischen Europa und Afrika?",
    answers: ["Schwarzes Meer", "Mittelmeer", "Nordsee", "Kaspisches Meer"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Fe?",
    answers: ["Fluor", "Eisen", "Blei", "Zink"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt der Schweiz?",
    answers: ["Zürich", "Genf", "Bern", "Basel"],
    correct: 2
  },
  {
    question: "Welches Tier legt die größten Eier unter den heute lebenden Landtieren?",
    answers: ["Adler", "Strauß", "Krokodil", "Pinguin"],
    correct: 1
  },
  {
    question: "Wie nennt man den Übergang von flüssigem Wasser zu Wasserdampf?",
    answers: ["Gefrieren", "Kondensieren", "Verdampfen", "Schmelzen"],
    correct: 2
  },
  {
    question: "Welcher Kontinent liegt am Südpol?",
    answers: ["Afrika", "Australien", "Antarktika", "Südamerika"],
    correct: 2
  },
  {
    question: "Welcher Künstler malte „Die Sternennacht“?",
    answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correct: 1
  },
  {
    question: "Wie heißt die Hauptstadt von Norwegen?",
    answers: ["Oslo", "Bergen", "Stockholm", "Helsinki"],
    correct: 0
  },
  {
    question: "Welches Organ produziert beim Menschen Insulin?",
    answers: ["Leber", "Bauchspeicheldrüse", "Niere", "Milz"],
    correct: 1
  },
  {
    question: "Wie viele Spieler stehen bei einer Fußballmannschaft normalerweise zu Spielbeginn auf dem Feld?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    question: "Welches Land ist für die Stadt Amsterdam bekannt?",
    answers: ["Belgien", "Niederlande", "Dänemark", "Schweden"],
    correct: 1
  },
  {
    question: "Welcher Stoff verleiht Pflanzenblättern ihre grüne Farbe?",
    answers: ["Keratin", "Chlorophyll", "Melanin", "Hämoglobin"],
    correct: 1
  },
  {
    question: "Wie heißt der größte Planet unseres Sonnensystems?",
    answers: ["Saturn", "Jupiter", "Neptun", "Erde"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Portugal?",
    answers: ["Porto", "Lissabon", "Faro", "Braga"],
    correct: 1
  },
  {
    question: "Welche Einheit wird zur Messung einer Frequenz verwendet?",
    answers: ["Hertz", "Newton", "Pascal", "Joule"],
    correct: 0
  },
  {
    question: "Wer entdeckte das Penicillin?",
    answers: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Isaac Newton"],
    correct: 1
  },
  {
    question: "Welches Tier kann seine Hautfarbe besonders auffällig anpassen?",
    answers: ["Chamäleon", "Igel", "Känguru", "Dachs"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Paris?",
    answers: ["Themse", "Seine", "Elbe", "Po"],
    correct: 1
  },
  {
    question: "Wie viele Bundesländer hat Deutschland?",
    answers: ["14", "15", "16", "17"],
    correct: 2
  },
  {
    question: "Was ist die Hauptstadt von Schweden?",
    answers: ["Göteborg", "Stockholm", "Malmö", "Uppsala"],
    correct: 1
  },
  {
    question: "Welches chemische Symbol steht für Natrium?",
    answers: ["N", "Na", "Nt", "Nm"],
    correct: 1
  },
  {
    question: "Wie heißt die größte heiße Wüste der Erde?",
    answers: ["Gobi", "Sahara", "Kalahari", "Atacama"],
    correct: 1
  },
  {
    question: "Welcher Knochen ist der längste im menschlichen Körper?",
    answers: ["Oberarmknochen", "Schienbein", "Oberschenkelknochen", "Speiche"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Irland?",
    answers: ["Cork", "Galway", "Dublin", "Belfast"],
    correct: 2
  },
  {
    question: "Welcher Wissenschaftler formulierte die Relativitätstheorie?",
    answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
    correct: 0
  },
  {
    question: "Welche Farbe haben Smaragde typischerweise?",
    answers: ["Rot", "Blau", "Grün", "Gelb"],
    correct: 2
  },
  {
    question: "Welcher Kontinent wird vom Äquator und vom Nullmeridian durchquert?",
    answers: ["Afrika", "Asien", "Nordamerika", "Australien"],
    correct: 0
  },
  {
    question: "Wie nennt man die kleinste Einheit eines chemischen Elements?",
    answers: ["Zelle", "Atom", "Molekül", "Ion"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Finnland?",
    answers: ["Turku", "Helsinki", "Tampere", "Espoo"],
    correct: 1
  },
  {
    question: "Welches Säugetier kann aktiv fliegen?",
    answers: ["Flughörnchen", "Fledermaus", "Pinguin", "Strauß"],
    correct: 1
  },
  {
    question: "Welches Land schenkte den USA die Freiheitsstatue?",
    answers: ["Großbritannien", "Frankreich", "Spanien", "Italien"],
    correct: 1
  },
  {
    question: "Wie viele Planeten hat unser Sonnensystem?",
    answers: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "Was misst ein Thermometer?",
    answers: ["Luftdruck", "Temperatur", "Luftfeuchtigkeit", "Geschwindigkeit"],
    correct: 1
  },
  {
    question: "Welches Land hat Kairo als Hauptstadt?",
    answers: ["Marokko", "Ägypten", "Tunesien", "Jordanien"],
    correct: 1
  },
  {
    question: "Welches Vitamin bildet der menschliche Körper mithilfe von Sonnenlicht in der Haut?",
    answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correct: 3
  },
  {
    question: "Wie heißt die Hauptstadt von Dänemark?",
    answers: ["Aarhus", "Odense", "Kopenhagen", "Aalborg"],
    correct: 2
  },
  {
    question: "Welcher Vogel ist ein bekanntes Symbol des Friedens?",
    answers: ["Rabe", "Taube", "Falke", "Pfau"],
    correct: 1
  },
  {
    question: "Welches Element hat die Ordnungszahl 1?",
    answers: ["Helium", "Sauerstoff", "Wasserstoff", "Kohlenstoff"],
    correct: 2
  },
  {
    question: "Welche Stadt liegt am Bosporus?",
    answers: ["Athen", "Istanbul", "Rom", "Kairo"],
    correct: 1
  },
  {
    question: "Wie viele Sekunden hat eine Minute?",
    answers: ["50", "60", "90", "100"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Polen?",
    answers: ["Krakau", "Danzig", "Warschau", "Breslau"],
    correct: 2
  },
  {
    question: "Welches Tier ist das schnellste Landtier?",
    answers: ["Löwe", "Gepard", "Pferd", "Antilope"],
    correct: 1
  },
  {
    question: "Welcher Planet ist für seinen Großen Roten Fleck bekannt?",
    answers: ["Mars", "Saturn", "Jupiter", "Uranus"],
    correct: 2
  },
  {
    question: "Welches Instrument misst den Luftdruck?",
    answers: ["Thermometer", "Barometer", "Hygrometer", "Tachometer"],
    correct: 1
  },
  {
    question: "Was ist die Hauptstadt von Tschechien?",
    answers: ["Brünn", "Prag", "Ostrava", "Pilsen"],
    correct: 1
  },
  {
    question: "Welche Blutkörperchen transportieren hauptsächlich Sauerstoff?",
    answers: ["Weiße Blutkörperchen", "Rote Blutkörperchen", "Blutplättchen", "Lymphozyten"],
    correct: 1
  },
  {
    question: "Wie heißt der höchste Berg der Erde über dem Meeresspiegel?",
    answers: ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
    correct: 1
  },
  {
    question: "Welcher berühmte Detektiv wurde von Arthur Conan Doyle erfunden?",
    answers: ["Hercule Poirot", "Sherlock Holmes", "Philip Marlowe", "Jules Maigret"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Buenos Aires?",
    answers: ["Chile", "Argentinien", "Peru", "Uruguay"],
    correct: 1
  },
  {
    question: "Welche Einheit wird für Kraft verwendet?",
    answers: ["Joule", "Newton", "Watt", "Pascal"],
    correct: 1
  },
  {
    question: "Welches Organ filtert Abfallstoffe aus dem Blut und bildet Urin?",
    answers: ["Lunge", "Niere", "Magen", "Milz"],
    correct: 1
  },
  {
    question: "Welcher Ozean liegt zwischen Europa und Nordamerika?",
    answers: ["Pazifik", "Atlantik", "Indischer Ozean", "Arktischer Ozean"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Ungarn?",
    answers: ["Budapest", "Debrecen", "Szeged", "Pécs"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Belgien?",
    answers: ["Antwerpen", "Brüssel", "Brügge", "Gent"],
    correct: 1
  },
  {
    question: "Welches chemische Symbol steht für Silber?",
    answers: ["Si", "Ag", "Sr", "Al"],
    correct: 1
  },
  {
    question: "Welcher Fluss fließt durch Rom?",
    answers: ["Tiber", "Po", "Arno", "Etsch"],
    correct: 0
  },
  {
    question: "Wie viele Herzen hat ein Oktopus?",
    answers: ["1", "2", "3", "4"],
    correct: 2
  },
  {
    question: "Welcher Kontinent hat die meisten Staaten?",
    answers: ["Asien", "Afrika", "Europa", "Südamerika"],
    correct: 1
  },
  {
    question: "Wer malte das Gemälde „Guernica“?",
    answers: ["Salvador Dalí", "Claude Monet", "Pablo Picasso", "Edvard Munch"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Island?",
    answers: ["Reykjavík", "Akureyri", "Keflavík", "Selfoss"],
    correct: 0
  },
  {
    question: "Welches Element hat das chemische Symbol K?",
    answers: ["Kalium", "Kalzium", "Kobalt", "Kupfer"],
    correct: 0
  },
  {
    question: "Wie viele Saiten hat eine klassische Gitarre normalerweise?",
    answers: ["4", "5", "6", "8"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Bangkok?",
    answers: ["Vietnam", "Thailand", "Kambodscha", "Malaysia"],
    correct: 1
  },
  {
    question: "Welcher Teil des menschlichen Auges bestimmt hauptsächlich die Augenfarbe?",
    answers: ["Netzhaut", "Hornhaut", "Iris", "Linse"],
    correct: 2
  },
  {
    question: "Wer schrieb den Roman „1984“?",
    answers: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "Franz Kafka"],
    correct: 0
  },
  {
    question: "Welche Einheit wird zur Messung des elektrischen Widerstands verwendet?",
    answers: ["Volt", "Ohm", "Tesla", "Watt"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kroatien?",
    answers: ["Split", "Dubrovnik", "Zagreb", "Rijeka"],
    correct: 2
  },
  {
    question: "Welches Tier ist das größte heute lebende Landtier?",
    answers: ["Nashorn", "Afrikanischer Elefant", "Flusspferd", "Giraffe"],
    correct: 1
  },
  {
    question: "Welcher Planet benötigt am längsten für einen Umlauf um die Sonne?",
    answers: ["Saturn", "Uranus", "Jupiter", "Neptun"],
    correct: 3
  },
  {
    question: "Wie heißt die Wissenschaft, die sich mit Erdbeben beschäftigt?",
    answers: ["Seismologie", "Vulkanologie", "Meteorologie", "Paläontologie"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Neu-Delhi?",
    answers: ["Pakistan", "Indien", "Nepal", "Bangladesch"],
    correct: 1
  },
  {
    question: "Welches Organ ist das größte innere Organ des menschlichen Körpers?",
    answers: ["Herz", "Lunge", "Leber", "Niere"],
    correct: 2
  },
  {
    question: "Welcher Komponist schrieb die Oper „Die Zauberflöte“?",
    answers: ["Beethoven", "Mozart", "Bach", "Schubert"],
    correct: 1
  },
  {
    question: "Welche Meerenge trennt Europa und Afrika an ihrer engsten Stelle?",
    answers: ["Straße von Gibraltar", "Beringstraße", "Bosporus", "Straße von Hormus"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Cu?",
    answers: ["Kupfer", "Kohlenstoff", "Kalzium", "Chrom"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Rumänien?",
    answers: ["Bukarest", "Sofia", "Belgrad", "Brașov"],
    correct: 0
  },
  {
    question: "Wie viele Chromosomen besitzt eine typische menschliche Körperzelle?",
    answers: ["23", "44", "46", "48"],
    correct: 2
  },
  {
    question: "Wer entwickelte die drei klassischen Bewegungsgesetze der Mechanik?",
    answers: ["Isaac Newton", "Charles Darwin", "Nikola Tesla", "Michael Faraday"],
    correct: 0
  },
  {
    question: "Welches Land ist flächenmäßig das größte der Erde?",
    answers: ["Kanada", "China", "Russland", "USA"],
    correct: 2
  },
  {
    question: "Wie heißt die Hauptstadt von Neuseeland?",
    answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    correct: 1
  },
  {
    question: "Welche Zellen des menschlichen Körpers sind hauptsächlich für die Abwehr von Krankheitserregern zuständig?",
    answers: ["Rote Blutkörperchen", "Weiße Blutkörperchen", "Fettzellen", "Muskelzellen"],
    correct: 1
  },
  {
    question: "Welches Land wird vom Nil durchflossen?",
    answers: ["Algerien", "Ägypten", "Marokko", "Libyen"],
    correct: 1
  },
  {
    question: "Welcher Künstler schuf die Skulptur „David“ in Florenz?",
    answers: ["Donatello", "Michelangelo", "Raffael", "Bernini"],
    correct: 1
  },
  {
    question: "Welches ist das kleinste Land der Erde?",
    answers: ["Monaco", "Vatikanstadt", "San Marino", "Liechtenstein"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Bulgarien?",
    answers: ["Varna", "Plowdiw", "Sofia", "Burgas"],
    correct: 2
  },
  {
    question: "Wie nennt man den direkten Übergang eines Stoffes vom festen in den gasförmigen Zustand?",
    answers: ["Kondensation", "Sublimation", "Verdunstung", "Schmelzen"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Beuteltieren?",
    answers: ["Känguru", "Lama", "Panda", "Faultier"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Wien?",
    answers: ["Rhein", "Donau", "Elbe", "Oder"],
    correct: 1
  },
  {
    question: "Wer schrieb „Die Verwandlung“?",
    answers: ["Franz Kafka", "Hermann Hesse", "Bertolt Brecht", "Stefan Zweig"],
    correct: 0
  },
  {
    question: "Welche Einheit wird zur Messung von Energie verwendet?",
    answers: ["Joule", "Newton", "Volt", "Hertz"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Serbien?",
    answers: ["Belgrad", "Novi Sad", "Niš", "Sarajevo"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt einen Rüssel?",
    answers: ["Nashorn", "Elefant", "Flusspferd", "Büffel"],
    correct: 1
  },
  {
    question: "Welche Schicht der Erde liegt direkt unter der Erdkruste?",
    answers: ["Äußerer Kern", "Erdmantel", "Innerer Kern", "Atmosphäre"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Seoul?",
    answers: ["Japan", "Südkorea", "Nordkorea", "Mongolei"],
    correct: 1
  },
  {
    question: "Welcher Bestandteil des Blutes ist hauptsächlich für die Blutgerinnung zuständig?",
    answers: ["Blutplättchen", "Rote Blutkörperchen", "Plasma", "Antikörper"],
    correct: 0
  },
  {
    question: "Wer malte „Der Schrei“?",
    answers: ["Edvard Munch", "Paul Cézanne", "Gustav Klimt", "Paul Klee"],
    correct: 0
  },
  {
    question: "Wie viele Grad hat ein rechter Winkel?",
    answers: ["45", "60", "90", "180"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Türkei?",
    answers: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol He?",
    answers: ["Helium", "Hafnium", "Holmium", "Wasserstoff"],
    correct: 0
  },
  {
    question: "Welches Gebirge trennt traditionell große Teile Europas von Asien?",
    answers: ["Alpen", "Ural", "Pyrenäen", "Karpaten"],
    correct: 1
  },
  {
    question: "Wie heißt der Prozess, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln?",
    answers: ["Atmung", "Photosynthese", "Gärung", "Osmose"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Mexiko?",
    answers: ["Monterrey", "Guadalajara", "Mexiko-Stadt", "Cancún"],
    correct: 2
  },
  {
    question: "Welcher Schriftsteller erfand die Figur Harry Potter?",
    answers: ["J. R. R. Tolkien", "J. K. Rowling", "C. S. Lewis", "Roald Dahl"],
    correct: 1
  },
  {
    question: "Wie viele Seiten hat ein regelmäßiges Sechseck?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Nairobi?",
    answers: ["Kenia", "Tansania", "Äthiopien", "Uganda"],
    correct: 0
  },
  {
    question: "Welche Drüse im Hals produziert die Hormone Thyroxin und Trijodthyronin?",
    answers: ["Schilddrüse", "Hypophyse", "Nebenniere", "Bauchspeicheldrüse"],
    correct: 0
  },
  {
    question: "Welcher Planet rotiert nahezu auf der Seite?",
    answers: ["Mars", "Uranus", "Jupiter", "Merkur"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Argentinien?",
    answers: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
    correct: 2
  },
  {
    question: "Welches Instrument gehört zu den Holzblasinstrumenten?",
    answers: ["Trompete", "Klarinette", "Posaune", "Tuba"],
    correct: 1
  },
  {
    question: "Welcher Stoff macht den größten Anteil der Erdatmosphäre aus?",
    answers: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Argon"],
    correct: 1
  },
  {
    question: "Wer schrieb „Der kleine Prinz“?",
    answers: ["Jules Verne", "Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Chile?",
    answers: ["Valparaíso", "Santiago de Chile", "Concepción", "Antofagasta"],
    correct: 1
  },
  {
    question: "Welcher Teil des menschlichen Skeletts schützt das Gehirn?",
    answers: ["Brustkorb", "Schädel", "Becken", "Wirbelsäule"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Pb?",
    answers: ["Platin", "Blei", "Phosphor", "Palladium"],
    correct: 1
  },
  {
    question: "Wie viele Ringe zeigt das olympische Symbol?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Peru?",
    answers: ["Cusco", "Lima", "Arequipa", "Trujillo"],
    correct: 1
  },
  {
    question: "Wie heißt die Wissenschaft von Fossilien und früheren Lebensformen?",
    answers: ["Paläontologie", "Archäologie", "Ökologie", "Anthropologie"],
    correct: 0
  },
  {
    question: "Welcher Komponist schrieb die „Vier Jahreszeiten“?",
    answers: ["Antonio Vivaldi", "Franz Schubert", "Johannes Brahms", "Joseph Haydn"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Rabat?",
    answers: ["Algerien", "Marokko", "Tunesien", "Libyen"],
    correct: 1
  },
  {
    question: "Wie nennt man die äußerste feste Schicht der Erde?",
    answers: ["Erdkruste", "Erdmantel", "Äußerer Kern", "Innerer Kern"],
    correct: 0
  },
  {
    question: "Welche Tiergruppe besitzt Federn?",
    answers: ["Säugetiere", "Vögel", "Reptilien", "Amphibien"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Vietnam?",
    answers: ["Ho-Chi-Minh-Stadt", "Hanoi", "Da Nang", "Huế"],
    correct: 1
  },
  {
    question: "Welches Element hat das chemische Symbol C?",
    answers: ["Kalzium", "Kohlenstoff", "Chlor", "Kupfer"],
    correct: 1
  },
  {
    question: "Wie viele Flächen hat ein Tetraeder?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Wer schrieb den Roman „Don Quijote“?",
    answers: ["Miguel de Cervantes", "Federico García Lorca", "Gabriel García Márquez", "Jorge Luis Borges"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Helsinki?",
    answers: ["Norwegen", "Finnland", "Estland", "Schweden"],
    correct: 1
  },
  {
    question: "Welches Organ speichert die von der Leber produzierte Gallenflüssigkeit?",
    answers: ["Milz", "Gallenblase", "Niere", "Blinddarm"],
    correct: 1
  },
  {
    question: "Welcher Fluss fließt durch Budapest?",
    answers: ["Donau", "Weichsel", "Dnjepr", "Rhone"],
    correct: 0
  },
  {
    question: "Welche Einheit wird zur Messung des Luftdrucks häufig verwendet?",
    answers: ["Pascal", "Watt", "Joule", "Tesla"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Estland?",
    answers: ["Riga", "Tallinn", "Vilnius", "Tartu"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Amphibien?",
    answers: ["Frosch", "Eidechse", "Schildkröte", "Krokodil"],
    correct: 0
  },
  {
    question: "Wer entwickelte die Evolutionstheorie durch natürliche Selektion maßgeblich?",
    answers: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Max Planck"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Manila?",
    answers: ["Indonesien", "Philippinen", "Malaysia", "Singapur"],
    correct: 1
  },
  {
    question: "Wie nennt man ein Dreieck mit drei gleich langen Seiten?",
    answers: ["Rechtwinkliges Dreieck", "Gleichseitiges Dreieck", "Stumpfwinkliges Dreieck", "Ungleichseitiges Dreieck"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Cl?",
    answers: ["Chlor", "Calcium", "Kobalt", "Chrom"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Lettland?",
    answers: ["Riga", "Tallinn", "Vilnius", "Kaunas"],
    correct: 0
  },
  {
    question: "Welches ist das größte Organ des menschlichen Körpers?",
    answers: ["Leber", "Haut", "Lunge", "Gehirn"],
    correct: 1
  },
  {
    question: "Welcher berühmte Turm befindet sich in Paris?",
    answers: ["Eiffelturm", "Schiefer Turm", "CN Tower", "Fernsehturm"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Litauen?",
    answers: ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"],
    correct: 1
  },
  {
    question: "Welcher Teil einer Zelle enthält bei Menschen den größten Teil der Erbinformation?",
    answers: ["Zellkern", "Zellmembran", "Ribosom", "Zellplasma"],
    correct: 0
  },
  {
    question: "Wer schrieb „Die göttliche Komödie“?",
    answers: ["Dante Alighieri", "Giovanni Boccaccio", "Umberto Eco", "Niccolò Machiavelli"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Jakarta?",
    answers: ["Indonesien", "Malaysia", "Thailand", "Philippinen"],
    correct: 0
  },
  {
    question: "Wie viele Nullen hat eine Million?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Mg?",
    answers: ["Mangan", "Magnesium", "Quecksilber", "Molybdän"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Slowenien?",
    answers: ["Maribor", "Ljubljana", "Koper", "Celje"],
    correct: 1
  },
  {
    question: "Welches Tier ist das höchste heute lebende Landtier?",
    answers: ["Elefant", "Giraffe", "Kamel", "Elch"],
    correct: 1
  },
  {
    question: "Welcher Teil des Ohrs ist für die Umwandlung von Schallschwingungen in Nervenimpulse besonders wichtig?",
    answers: ["Ohrmuschel", "Schnecke", "Gehörgang", "Ohrtrompete"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Bogotá?",
    answers: ["Kolumbien", "Venezuela", "Ecuador", "Bolivien"],
    correct: 0
  },
  {
    question: "Wie heißt die Lehre von den Genen und der Vererbung?",
    answers: ["Genetik", "Anatomie", "Botanik", "Zoologie"],
    correct: 0
  },
  {
    question: "Welcher Künstler ist für die Gemälde mit Seerosen besonders bekannt?",
    answers: ["Claude Monet", "Paul Gauguin", "Rembrandt", "Henri Matisse"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Slowakei?",
    answers: ["Košice", "Bratislava", "Nitra", "Žilina"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Zn?",
    answers: ["Zinn", "Zink", "Zirconium", "Xenon"],
    correct: 1
  },
  {
    question: "Welche Wüste liegt größtenteils in der Mongolei und in China?",
    answers: ["Atacama", "Gobi", "Namib", "Mojave"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Luxemburg?",
    answers: ["Esch-sur-Alzette", "Luxemburg", "Vianden", "Echternach"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Sn?",
    answers: ["Silber", "Zinn", "Schwefel", "Natrium"],
    correct: 1
  },
  {
    question: "Welcher Fluss fließt durch Köln?",
    answers: ["Elbe", "Rhein", "Main", "Weser"],
    correct: 1
  },
  {
    question: "Wie viele Arme hat ein Seestern typischerweise?",
    answers: ["4", "5", "6", "8"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Albanien?",
    answers: ["Tirana", "Durrës", "Vlora", "Shkodra"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Der Prozess“?",
    answers: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Erich Kästner"],
    correct: 1
  },
  {
    question: "Welche Einheit wird zur Messung der Stromstärke verwendet?",
    answers: ["Ampere", "Volt", "Ohm", "Watt"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zur Familie der Katzen?",
    answers: ["Hyäne", "Luchs", "Fuchs", "Wolf"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nordmazedonien?",
    answers: ["Skopje", "Ohrid", "Bitola", "Tetovo"],
    correct: 0
  },
  {
    question: "Welcher Stoff ist der Hauptbestandteil von Glas?",
    answers: ["Quarzsand", "Kalkstein", "Graphit", "Ton"],
    correct: 0
  },
  {
    question: "Wer komponierte die „Mondscheinsonate“?",
    answers: ["Frédéric Chopin", "Ludwig van Beethoven", "Franz Liszt", "Joseph Haydn"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Montevideo?",
    answers: ["Paraguay", "Uruguay", "Bolivien", "Chile"],
    correct: 1
  },
  {
    question: "Welche Blutgruppe gilt im AB0-System als Universalspender für rote Blutkörperchen?",
    answers: ["A", "B", "AB", "0"],
    correct: 3
  },
  {
    question: "Wie viele Planeten liegen zwischen Erde und Sonne?",
    answers: ["1", "2", "3", "4"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Bosnien und Herzegowina?",
    answers: ["Mostar", "Sarajevo", "Banja Luka", "Tuzla"],
    correct: 1
  },
  {
    question: "Welcher Vogel kann nicht fliegen?",
    answers: ["Storch", "Pinguin", "Falke", "Schwalbe"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ca?",
    answers: ["Kohlenstoff", "Kalzium", "Kobalt", "Cadmium"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Ecuador?",
    answers: ["Guayaquil", "Quito", "Cuenca", "Loja"],
    correct: 1
  },
  {
    question: "Wer malte „Das letzte Abendmahl“?",
    answers: ["Raffael", "Leonardo da Vinci", "Caravaggio", "Tizian"],
    correct: 1
  },
  {
    question: "Welches Organ verbindet den Mund mit dem Magen?",
    answers: ["Luftröhre", "Speiseröhre", "Dünndarm", "Kehlkopf"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Singapur?",
    answers: ["Singapur", "Jurong", "Sentosa", "Woodlands"],
    correct: 0
  },
  {
    question: "Welches Tier ist für seinen Panzer bekannt?",
    answers: ["Schildkröte", "Otter", "Delfin", "Murmeltier"],
    correct: 0
  },
  {
    question: "Wie viele Seiten hat ein regelmäßiges Achteck?",
    answers: ["6", "7", "8", "10"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Addis Abeba?",
    answers: ["Kenia", "Äthiopien", "Sudan", "Somalia"],
    correct: 1
  },
  {
    question: "Welcher Teil des menschlichen Gehirns ist besonders wichtig für Gleichgewicht und Koordination?",
    answers: ["Kleinhirn", "Hirnstamm", "Hypothalamus", "Großhirnrinde"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Al?",
    answers: ["Argon", "Aluminium", "Actinium", "Antimon"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Venezuela?",
    answers: ["Maracaibo", "Caracas", "Valencia", "Barquisimeto"],
    correct: 1
  },
  {
    question: "Wer schrieb „Oliver Twist“?",
    answers: ["Charles Dickens", "Mark Twain", "Oscar Wilde", "Daniel Defoe"],
    correct: 0
  },
  {
    question: "Welcher Planet ist der Erde von seiner Größe her am ähnlichsten?",
    answers: ["Mars", "Venus", "Merkur", "Neptun"],
    correct: 1
  },
  {
    question: "Welches Instrument misst die Luftfeuchtigkeit?",
    answers: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Malaysia?",
    answers: ["George Town", "Kuala Lumpur", "Johor Bahru", "Malakka"],
    correct: 1
  },
  {
    question: "Wie nennt man die Verwandlung einer Raupe in einen Schmetterling?",
    answers: ["Mutation", "Metamorphose", "Evolution", "Regeneration"],
    correct: 1
  },
  {
    question: "Welches Meer liegt zwischen Italien und dem Balkan?",
    answers: ["Adriatisches Meer", "Baltisches Meer", "Rotes Meer", "Kaspisches Meer"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Islamabad?",
    answers: ["Indien", "Pakistan", "Afghanistan", "Bangladesch"],
    correct: 1
  },
  {
    question: "Welcher Wissenschaftler formulierte die Gesetze der Planetenbewegung?",
    answers: ["Johannes Kepler", "Nikolaus Kopernikus", "Galileo Galilei", "Tycho Brahe"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Malta?",
    answers: ["Valletta", "Mdina", "Sliema", "Mosta"],
    correct: 0
  },
  {
    question: "Welches Organ ist hauptsächlich für die Entgiftung des Blutes zuständig?",
    answers: ["Leber", "Milz", "Magen", "Herz"],
    correct: 0
  },
  {
    question: "Welche Farbe hat Schwefel in seiner typischen festen Form?",
    answers: ["Gelb", "Blau", "Rot", "Schwarz"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Damaskus?",
    answers: ["Libanon", "Syrien", "Jordanien", "Irak"],
    correct: 1
  },
  {
    question: "Wie viele Punkte hat ein klassischer Würfel insgesamt auf allen sechs Seiten?",
    answers: ["18", "21", "24", "28"],
    correct: 1
  },
  {
    question: "Wer schrieb „Die Leiden des jungen Werthers“?",
    answers: ["Goethe", "Schiller", "Lessing", "Heine"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Zypern?",
    answers: ["Limassol", "Larnaka", "Nikosia", "Paphos"],
    correct: 2
  },
  {
    question: "Welches chemische Element hat das Symbol P?",
    answers: ["Platin", "Phosphor", "Kalium", "Blei"],
    correct: 1
  },
  {
    question: "Welches Tier ist das größte lebende Reptil?",
    answers: ["Komodowaran", "Leistenkrokodil", "Lederschildkröte", "Alligator"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Saudi-Arabien?",
    answers: ["Dschidda", "Mekka", "Riad", "Medina"],
    correct: 2
  },
  {
    question: "Welcher Teil einer Blüte entwickelt sich nach der Befruchtung häufig zur Frucht?",
    answers: ["Staubblatt", "Fruchtknoten", "Kelchblatt", "Blütenblatt"],
    correct: 1
  },
  {
    question: "Welches Gerät misst Windgeschwindigkeit?",
    answers: ["Anemometer", "Seismograf", "Hygrometer", "Manometer"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Jordanien?",
    answers: ["Amman", "Aqaba", "Petra", "Irbid"],
    correct: 0
  },
  {
    question: "Wer komponierte das Ballett „Schwanensee“?",
    answers: ["Tschaikowski", "Strawinsky", "Rimski-Korsakow", "Prokofjew"],
    correct: 0
  },
  {
    question: "Wie nennt man die äußere Schicht der menschlichen Haut?",
    answers: ["Lederhaut", "Oberhaut", "Unterhaut", "Knochenhaut"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Algier?",
    answers: ["Tunesien", "Algerien", "Marokko", "Libyen"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ne?",
    answers: ["Neon", "Nickel", "Neptunium", "Natrium"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Dresden?",
    answers: ["Elbe", "Oder", "Main", "Mosel"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Belarus?",
    answers: ["Minsk", "Brest", "Gomel", "Wizebsk"],
    correct: 0
  },
  {
    question: "Wie nennt man die Fähigkeit eines Körpers, Arbeit zu verrichten?",
    answers: ["Kraft", "Energie", "Leistung", "Druck"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Menschenaffen?",
    answers: ["Gorilla", "Pavian", "Makak", "Lemur"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Georgien?",
    answers: ["Batumi", "Tiflis", "Kutaisi", "Gori"],
    correct: 1
  },
  {
    question: "Wer erfand den Buchdruck mit beweglichen Metalllettern in Europa?",
    answers: ["Johannes Gutenberg", "Leonardo da Vinci", "James Watt", "Samuel Morse"],
    correct: 0
  },
  {
    question: "Welche Schicht der Atmosphäre enthält den größten Teil des Wetters?",
    answers: ["Stratosphäre", "Troposphäre", "Mesosphäre", "Thermosphäre"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Beirut?",
    answers: ["Syrien", "Libanon", "Jordanien", "Israel"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ni?",
    answers: ["Stickstoff", "Nickel", "Neon", "Niob"],
    correct: 1
  },
  {
    question: "Wie viele Seiten hat ein regelmäßiges Fünfeck?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Armenien?",
    answers: ["Jerewan", "Gjumri", "Vanadzor", "Etschmiadsin"],
    correct: 0
  },
  {
    question: "Welcher Teil des Verdauungssystems nimmt den größten Teil der Nährstoffe auf?",
    answers: ["Magen", "Dünndarm", "Dickdarm", "Speiseröhre"],
    correct: 1
  },
  {
    question: "Wer schrieb „Moby-Dick“?",
    answers: ["Herman Melville", "Jack London", "Edgar Allan Poe", "John Steinbeck"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Bagdad?",
    answers: ["Iran", "Irak", "Kuwait", "Syrien"],
    correct: 1
  },
  {
    question: "Welche Einheit wird zur Messung von Temperatur im Internationalen Einheitensystem verwendet?",
    answers: ["Celsius", "Kelvin", "Fahrenheit", "Joule"],
    correct: 1
  },
  {
    question: "Welches Tier besitzt Stacheln zur Verteidigung?",
    answers: ["Igel", "Otter", "Marder", "Biber"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Aserbaidschan?",
    answers: ["Baku", "Gandscha", "Sumqayıt", "Şəki"],
    correct: 0
  },
  {
    question: "Welcher Stoff gibt dem menschlichen Blut seine rote Farbe?",
    answers: ["Melanin", "Hämoglobin", "Keratin", "Insulin"],
    correct: 1
  },
  {
    question: "Welcher Künstler malte „Die Geburt der Venus“?",
    answers: ["Sandro Botticelli", "Raffael", "Caravaggio", "Tintoretto"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Kabul?",
    answers: ["Pakistan", "Afghanistan", "Tadschikistan", "Usbekistan"],
    correct: 1
  },
  {
    question: "Welche Kraft zieht Gegenstände zur Erde?",
    answers: ["Reibung", "Gravitation", "Magnetismus", "Auftrieb"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Nagetieren?",
    answers: ["Biber", "Dachs", "Igel", "Maulwurf"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kasachstan?",
    answers: ["Almaty", "Astana", "Schymkent", "Karaganda"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol S?",
    answers: ["Silizium", "Schwefel", "Silber", "Strontium"],
    correct: 1
  },
  {
    question: "Wie viele Kammern hat das menschliche Herz?",
    answers: ["2", "3", "4", "5"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Havanna?",
    answers: ["Kuba", "Jamaika", "Haiti", "Dominikanische Republik"],
    correct: 0
  },
  {
    question: "Wer schrieb „Die Schatzinsel“?",
    answers: ["Robert Louis Stevenson", "Daniel Defoe", "Jules Verne", "Jonathan Swift"],
    correct: 0
  },
  {
    question: "Welches Organ ist für die Bildung von Gallenflüssigkeit verantwortlich?",
    answers: ["Magen", "Leber", "Bauchspeicheldrüse", "Milz"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Jamaika?",
    answers: ["Montego Bay", "Kingston", "Negril", "Spanish Town"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol F?",
    answers: ["Fluor", "Francium", "Eisen", "Phosphor"],
    correct: 0
  },
  {
    question: "Welches Tier ist für seine Fähigkeit bekannt, Dämme zu bauen?",
    answers: ["Otter", "Biber", "Dachs", "Waschbär"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Dominikanischen Republik?",
    answers: ["Santo Domingo", "Punta Cana", "Santiago", "La Romana"],
    correct: 0
  },
  {
    question: "Wie nennt man den Vorgang, bei dem Wasserdampf wieder flüssig wird?",
    answers: ["Sublimation", "Kondensation", "Verdampfung", "Gefrieren"],
    correct: 1
  },
  {
    question: "Wer komponierte die Oper „Carmen“?",
    answers: ["Georges Bizet", "Giuseppe Verdi", "Giacomo Puccini", "Richard Wagner"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Oslo?",
    answers: ["Schweden", "Norwegen", "Finnland", "Dänemark"],
    correct: 1
  },
  {
    question: "Welches Körperteil enthält die Kniescheibe?",
    answers: ["Schulter", "Knie", "Handgelenk", "Hüfte"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Tunesien?",
    answers: ["Sfax", "Tunis", "Sousse", "Monastir"],
    correct: 1
  },
  {
    question: "Welcher Stoff ist für die Festigkeit von Knochen besonders wichtig?",
    answers: ["Kalzium", "Natrium", "Chlor", "Kalium"],
    correct: 0
  },
  {
    question: "Welcher Schriftsteller schuf die Figur Tom Sawyer?",
    answers: ["Mark Twain", "Jack London", "Charles Dickens", "Ernest Hemingway"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nepal?",
    answers: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ar?",
    answers: ["Argon", "Arsen", "Silber", "Radon"],
    correct: 0
  },
  {
    question: "Welche Tierklasse umfasst Salamander und Molche?",
    answers: ["Reptilien", "Amphibien", "Säugetiere", "Fische"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Dhaka?",
    answers: ["Bangladesch", "Nepal", "Bhutan", "Sri Lanka"],
    correct: 0
  },
  {
    question: "Wie nennt man den Mittelpunkt eines Kreises?",
    answers: ["Scheitelpunkt", "Zentrum", "Brennpunkt", "Schnittpunkt"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Ghana?",
    answers: ["Kumasi", "Accra", "Tamale", "Cape Coast"],
    correct: 1
  },
  {
    question: "Wer malte „Die Nachtwache“?",
    answers: ["Rembrandt", "Rubens", "Vermeer", "Van Dyck"],
    correct: 0
  },
  {
    question: "Welches Organ gehört zum zentralen Nervensystem?",
    answers: ["Herz", "Gehirn", "Leber", "Lunge"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Senegal?",
    answers: ["Dakar", "Saint-Louis", "Thiès", "Kaolack"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Co?",
    answers: ["Kupfer", "Kobalt", "Kohlenstoff", "Chrom"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Paraguay?",
    answers: ["Asunción", "Encarnación", "Ciudad del Este", "Luque"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Br?",
    answers: ["Brom", "Barium", "Bor", "Beryllium"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Prag?",
    answers: ["Moldau", "Oder", "Donau", "Weichsel"],
    correct: 0
  },
  {
    question: "Welche Tierart ist für ihre extrem langsame Fortbewegung bekannt?",
    answers: ["Faultier", "Mungo", "Luchs", "Murmeltier"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Montenegro?",
    answers: ["Kotor", "Budva", "Podgorica", "Bar"],
    correct: 2
  },
  {
    question: "Wer schrieb den Roman „Stolz und Vorurteil“?",
    answers: ["Jane Austen", "Virginia Woolf", "Emily Brontë", "Agatha Christie"],
    correct: 0
  },
  {
    question: "Wie viele Grad hat ein Vollkreis?",
    answers: ["180", "270", "360", "400"],
    correct: 2
  },
  {
    question: "Welches Tier ist ein Wiederkäuer?",
    answers: ["Kuh", "Schwein", "Pferd", "Kaninchen"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Moldau?",
    answers: ["Chișinău", "Bălți", "Tiraspol", "Cahul"],
    correct: 0
  },
  {
    question: "Welches Gas wird für die Atmung des Menschen hauptsächlich benötigt?",
    answers: ["Stickstoff", "Sauerstoff", "Helium", "Argon"],
    correct: 1
  },
  {
    question: "Wer komponierte den „Boléro“?",
    answers: ["Maurice Ravel", "Claude Debussy", "Erik Satie", "Camille Saint-Saëns"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Maskat?",
    answers: ["Oman", "Katar", "Jemen", "Bahrain"],
    correct: 0
  },
  {
    question: "Welcher Muskel trennt Brust- und Bauchraum?",
    answers: ["Bizeps", "Zwerchfell", "Trizeps", "Wadenmuskel"],
    correct: 1
  },
  {
    question: "Wie viele Seiten hat ein Nonagon?",
    answers: ["7", "8", "9", "10"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Bhutan?",
    answers: ["Paro", "Thimphu", "Punakha", "Phuentsholing"],
    correct: 1
  },
  {
    question: "Welches Tier ist das größte Mitglied der Hirschfamilie?",
    answers: ["Reh", "Elch", "Rothirsch", "Rentier"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Li?",
    answers: ["Lithium", "Blei", "Lutetium", "Lanthan"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Madagaskar?",
    answers: ["Toamasina", "Antananarivo", "Mahajanga", "Fianarantsoa"],
    correct: 1
  },
  {
    question: "Wer malte „Das Mädchen mit dem Perlenohrring“?",
    answers: ["Johannes Vermeer", "Rembrandt", "Peter Paul Rubens", "Jan van Eyck"],
    correct: 0
  },
  {
    question: "Welches Organ enthält die Stimmbänder?",
    answers: ["Kehlkopf", "Rachen", "Lunge", "Speiseröhre"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Laos?",
    answers: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt die längste Tragzeit unter den Landtieren?",
    answers: ["Pferd", "Elefant", "Giraffe", "Nashorn"],
    correct: 1
  },
  {
    question: "Wie viele Monate haben genau 30 Tage?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Jerewan?",
    answers: ["Georgien", "Armenien", "Aserbaidschan", "Kasachstan"],
    correct: 1
  },
  {
    question: "Welche Struktur verbindet Muskeln mit Knochen?",
    answers: ["Sehne", "Band", "Knorpel", "Nerv"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Kr?",
    answers: ["Krypton", "Kalium", "Kobalt", "Kohlenstoff"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Mosambik?",
    answers: ["Beira", "Maputo", "Nampula", "Pemba"],
    correct: 1
  },
  {
    question: "Wer schrieb „Robinson Crusoe“?",
    answers: ["Daniel Defoe", "Jonathan Swift", "Charles Dickens", "Walter Scott"],
    correct: 0
  },
  {
    question: "Welcher Planet hat die kürzeste Umlaufzeit um die Sonne?",
    answers: ["Venus", "Merkur", "Mars", "Erde"],
    correct: 1
  },
  {
    question: "Welches Gerät zeichnet Erdbebenwellen auf?",
    answers: ["Seismograf", "Barometer", "Spektrometer", "Oszilloskop"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Angola?",
    answers: ["Luanda", "Huambo", "Lobito", "Benguela"],
    correct: 0
  },
  {
    question: "Wie nennt man die Gesamtheit aller Knochen des Körpers?",
    answers: ["Skelett", "Muskulatur", "Gewebe", "Nervensystem"],
    correct: 0
  },
  {
    question: "Welches Meer liegt zwischen Afrika und der Arabischen Halbinsel?",
    answers: ["Rotes Meer", "Schwarzes Meer", "Arabisches Meer", "Totes Meer"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Doha?",
    answers: ["Kuwait", "Katar", "Bahrain", "Oman"],
    correct: 1
  },
  {
    question: "Wer formulierte die Gesetze der Vererbung anhand von Erbsenpflanzen?",
    answers: ["Gregor Mendel", "Louis Pasteur", "Robert Hooke", "Alexander Fleming"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Ruanda?",
    answers: ["Kigali", "Butare", "Gisenyi", "Ruhengeri"],
    correct: 0
  },
  {
    question: "Welches Organ produziert einen großen Teil der Verdauungsenzyme?",
    answers: ["Milz", "Bauchspeicheldrüse", "Gallenblase", "Dickdarm"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol I?",
    answers: ["Iod", "Iridium", "Indium", "Eisen"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Uganda?",
    answers: ["Kampala", "Entebbe", "Jinja", "Gulu"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen pro Mannschaft beim Basketball gleichzeitig auf dem Spielfeld?",
    answers: ["4", "5", "6", "7"],
    correct: 1
  },
  {
    question: "Wer schrieb „Alice im Wunderland“?",
    answers: ["Lewis Carroll", "Oscar Wilde", "J. M. Barrie", "Rudyard Kipling"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Ulaanbaatar?",
    answers: ["Mongolei", "Kasachstan", "Kirgisistan", "Usbekistan"],
    correct: 0
  },
  {
    question: "Welche Struktur verbindet Knochen miteinander?",
    answers: ["Sehnen", "Bänder", "Muskeln", "Arterien"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Hg?",
    answers: ["Quecksilber", "Hafnium", "Helium", "Wasserstoff"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Namibia?",
    answers: ["Swakopmund", "Windhoek", "Walvis Bay", "Lüderitz"],
    correct: 1
  },
  {
    question: "Welcher Vogel besitzt die größte Flügelspannweite unter den heute lebenden Vögeln?",
    answers: ["Wanderalbatros", "Steinadler", "Kondor", "Pelikan"],
    correct: 0
  },
  {
    question: "Wie heißt die gedachte Linie bei 0 Grad geografischer Breite?",
    answers: ["Äquator", "Nullmeridian", "Wendekreis", "Datumsgrenze"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Sambia?",
    answers: ["Lusaka", "Kitwe", "Ndola", "Livingstone"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „Aida“?",
    answers: ["Giuseppe Verdi", "Giacomo Puccini", "Gioachino Rossini", "Gaetano Donizetti"],
    correct: 0
  },
  {
    question: "Welcher Teil des Verdauungssystems entzieht dem Nahrungsbrei vor allem Wasser?",
    answers: ["Dünndarm", "Dickdarm", "Magen", "Speiseröhre"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Phnom Penh?",
    answers: ["Kambodscha", "Laos", "Myanmar", "Vietnam"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Mn?",
    answers: ["Mangan", "Magnesium", "Molybdän", "Mendelevium"],
    correct: 0
  },
  {
    question: "Wie viele Seiten hat ein Dekagon?",
    answers: ["8", "9", "10", "12"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Tansania?",
    answers: ["Daressalam", "Dodoma", "Arusha", "Mwanza"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zur Familie der Hunde?",
    answers: ["Fuchs", "Marder", "Luchs", "Dachs"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Der alte Mann und das Meer“?",
    answers: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "F. Scott Fitzgerald"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Port Moresby?",
    answers: ["Fidschi", "Papua-Neuguinea", "Samoa", "Vanuatu"],
    correct: 1
  },
  {
    question: "Welche Zellbestandteile werden oft als Kraftwerke der Zelle bezeichnet?",
    answers: ["Ribosomen", "Mitochondrien", "Lysosomen", "Zentriolen"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Cr?",
    answers: ["Chrom", "Kupfer", "Kalzium", "Kohlenstoff"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Simbabwe?",
    answers: ["Harare", "Bulawayo", "Mutare", "Gweru"],
    correct: 0
  },
  {
    question: "Wie nennt man die Lehre vom Wetter?",
    answers: ["Meteorologie", "Geologie", "Astronomie", "Hydrologie"],
    correct: 0
  },
  {
    question: "Wer schuf die Figur Dracula in dem gleichnamigen Roman?",
    answers: ["Bram Stoker", "Mary Shelley", "Edgar Allan Poe", "Arthur Conan Doyle"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Lima?",
    answers: ["Peru", "Bolivien", "Ecuador", "Chile"],
    correct: 0
  },
  {
    question: "Welches Hormon senkt normalerweise den Blutzuckerspiegel?",
    answers: ["Adrenalin", "Insulin", "Thyroxin", "Cortisol"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ba?",
    answers: ["Barium", "Beryllium", "Bor", "Brom"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Mauritius?",
    answers: ["Port Louis", "Curepipe", "Vacoas", "Mahébourg"],
    correct: 0
  },
  {
    question: "Welches Tier verwendet Echoortung zur Orientierung?",
    answers: ["Fledermaus", "Adler", "Strauß", "Pfau"],
    correct: 0
  },
  {
    question: "Wie viele Karten enthält ein klassisches französisches Kartenspiel ohne Joker?",
    answers: ["32", "48", "52", "54"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Malé?",
    answers: ["Malediven", "Sri Lanka", "Mauritius", "Seychellen"],
    correct: 0
  },
  {
    question: "Wer komponierte „Eine kleine Nachtmusik“?",
    answers: ["Wolfgang Amadeus Mozart", "Joseph Haydn", "Franz Schubert", "Johann Strauss"],
    correct: 0
  },
  {
    question: "Welche Struktur verschließt beim Schlucken normalerweise den Eingang zur Luftröhre?",
    answers: ["Kehldeckel", "Zunge", "Gaumen", "Stimmband"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Fidschi?",
    answers: ["Suva", "Nadi", "Lautoka", "Labasa"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Si?",
    answers: ["Silizium", "Silber", "Schwefel", "Strontium"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Hamburg?",
    answers: ["Weser", "Elbe", "Rhein", "Oder"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt San José?",
    answers: ["Costa Rica", "Panama", "Nicaragua", "Honduras"],
    correct: 0
  },
  {
    question: "Wie nennt man Tiere, die sowohl pflanzliche als auch tierische Nahrung fressen?",
    answers: ["Herbivoren", "Omnivoren", "Karnivoren", "Parasiten"],
    correct: 1
  },
  {
    question: "Wer schrieb „Frankenstein“?",
    answers: ["Mary Shelley", "Jane Austen", "Emily Brontë", "Virginia Woolf"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Panama?",
    answers: ["Colón", "Panama-Stadt", "David", "Santiago"],
    correct: 1
  },
  {
    question: "Welcher Teil eines Zahns ist von Zahnschmelz bedeckt?",
    answers: ["Zahnkrone", "Zahnwurzel", "Zahnnerv", "Wurzelkanal"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Be?",
    answers: ["Beryllium", "Barium", "Blei", "Bismut"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Honduras?",
    answers: ["San Pedro Sula", "Tegucigalpa", "La Ceiba", "Comayagua"],
    correct: 1
  },
  {
    question: "Welches Tier ist ein Eier legendes Säugetier?",
    answers: ["Schnabeltier", "Koala", "Wombat", "Känguru"],
    correct: 0
  },
  {
    question: "Wie viele Töne umfasst eine klassische Oktave einschließlich des wiederholten Grundtons?",
    answers: ["7", "8", "9", "12"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Managua?",
    answers: ["Guatemala", "Nicaragua", "El Salvador", "Belize"],
    correct: 1
  },
  {
    question: "Wer entdeckte die Röntgenstrahlen?",
    answers: ["Wilhelm Conrad Röntgen", "Max Planck", "Heinrich Hertz", "Otto Hahn"],
    correct: 0
  },
  {
    question: "Welche Zellen nehmen bei Pflanzen hauptsächlich Wasser aus dem Boden auf?",
    answers: ["Wurzelhaarzellen", "Schließzellen", "Blütenzellen", "Samenzellen"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von El Salvador?",
    answers: ["Santa Ana", "San Salvador", "San Miguel", "La Libertad"],
    correct: 1
  },
  {
    question: "Welches chemische Element hat das Symbol Ti?",
    answers: ["Titan", "Thallium", "Zinn", "Tellur"],
    correct: 0
  },
  {
    question: "Welcher Planet besitzt die höchste mittlere Oberflächentemperatur?",
    answers: ["Merkur", "Venus", "Mars", "Jupiter"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Guatemala-Stadt?",
    answers: ["Guatemala", "Belize", "Honduras", "El Salvador"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von den Pilzen?",
    answers: ["Mykologie", "Ornithologie", "Entomologie", "Ichthyologie"],
    correct: 0
  },
  {
    question: "Wer schrieb „In 80 Tagen um die Welt“?",
    answers: ["Jules Verne", "Alexandre Dumas", "Victor Hugo", "Émile Zola"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Belize?",
    answers: ["Belize City", "Belmopan", "San Ignacio", "Orange Walk"],
    correct: 1
  },
  {
    question: "Welches Organ enthält die sogenannten Lungenbläschen?",
    answers: ["Lunge", "Leber", "Niere", "Herz"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Pt?",
    answers: ["Platin", "Phosphor", "Polonium", "Protactinium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Guyana?",
    answers: ["Georgetown", "Linden", "New Amsterdam", "Bartica"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt einen Beutel zur Aufzucht seiner Jungen?",
    answers: ["Wombat", "Lama", "Panda", "Bison"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen beim Volleyball pro Mannschaft normalerweise gleichzeitig auf dem Feld?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Paramaribo?",
    answers: ["Suriname", "Guyana", "Französisch-Guayana", "Venezuela"],
    correct: 0
  },
  {
    question: "Wer malte „Die Beständigkeit der Erinnerung“?",
    answers: ["Salvador Dalí", "Joan Miró", "Pablo Picasso", "René Magritte"],
    correct: 0
  },
  {
    question: "Welche Struktur im menschlichen Körper enthält das Rückenmark?",
    answers: ["Wirbelsäule", "Brustbein", "Becken", "Schulterblatt"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Xe?",
    answers: ["Xenon", "Xenium", "Zirkonium", "Radon"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kirgisistan?",
    answers: ["Bischkek", "Osch", "Taschkent", "Duschanbe"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol B?",
    answers: ["Brom", "Bor", "Barium", "Beryllium"],
    correct: 1
  },
  {
    question: "Welcher Fluss fließt durch München?",
    answers: ["Isar", "Inn", "Lech", "Main"],
    correct: 0
  },
  {
    question: "Welches Tier ist das größte heute lebende Raubtier an Land?",
    answers: ["Tiger", "Eisbär", "Löwe", "Braunbär"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Tadschikistan?",
    answers: ["Chudschand", "Duschanbe", "Samarkand", "Buchara"],
    correct: 1
  },
  {
    question: "Wer schrieb den Roman „Krieg und Frieden“?",
    answers: ["Leo Tolstoi", "Fjodor Dostojewski", "Anton Tschechow", "Iwan Turgenew"],
    correct: 0
  },
  {
    question: "Welche Einheit wird zur Messung der Leistung verwendet?",
    answers: ["Joule", "Watt", "Newton", "Pascal"],
    correct: 1
  },
  {
    question: "Welche Tiergruppe besitzt sechs Beine?",
    answers: ["Spinnentiere", "Insekten", "Krebstiere", "Amphibien"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Usbekistan?",
    answers: ["Samarkand", "Taschkent", "Buchara", "Chiwa"],
    correct: 1
  },
  {
    question: "Welche Substanz hat bei Normaldruck einen Gefrierpunkt von 0 Grad Celsius?",
    answers: ["Ethanol", "Wasser", "Quecksilber", "Olivenöl"],
    correct: 1
  },
  {
    question: "Wer komponierte die Oper „Der Barbier von Sevilla“?",
    answers: ["Gioachino Rossini", "Giuseppe Verdi", "Giacomo Puccini", "Georges Bizet"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Abu Dhabi?",
    answers: ["Katar", "Vereinigte Arabische Emirate", "Oman", "Kuwait"],
    correct: 1
  },
  {
    question: "Welcher Teil des Gehirns steuert unter anderem Atmung und Herzschlag?",
    answers: ["Hirnstamm", "Kleinhirn", "Hippocampus", "Sehnerv"],
    correct: 0
  },
  {
    question: "Wie viele Seiten hat ein Dodekagon?",
    answers: ["10", "11", "12", "14"],
    correct: 2
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Myanmar?",
    answers: ["Yangon", "Mandalay", "Naypyidaw", "Bagan"],
    correct: 2
  },
  {
    question: "Welches Tier gehört zu den Kamelartigen?",
    answers: ["Lama", "Zebra", "Antilope", "Yak"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Se?",
    answers: ["Selen", "Silizium", "Schwefel", "Samarium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nigeria?",
    answers: ["Lagos", "Abuja", "Kano", "Ibadan"],
    correct: 1
  },
  {
    question: "Wer malte „American Gothic“?",
    answers: ["Grant Wood", "Edward Hopper", "Andy Warhol", "Jackson Pollock"],
    correct: 0
  },
  {
    question: "Welcher Knochen schützt hauptsächlich Herz und Lunge?",
    answers: ["Brustkorb", "Schädel", "Becken", "Unterkiefer"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kamerun?",
    answers: ["Douala", "Yaoundé", "Garoua", "Bafoussam"],
    correct: 1
  },
  {
    question: "Welches Tier besitzt drei Zehen an jedem Fuß und kann nicht fliegen?",
    answers: ["Emu", "Strauß", "Kiwi", "Pinguin"],
    correct: 0
  },
  {
    question: "Wie viele Jahre umfasst ein Jahrhundert?",
    answers: ["10", "50", "100", "1000"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Gaborone?",
    answers: ["Botswana", "Namibia", "Sambia", "Lesotho"],
    correct: 0
  },
  {
    question: "Welcher Teil des Nervensystems verbindet das Gehirn mit vielen Nerven des Körpers?",
    answers: ["Rückenmark", "Netzhaut", "Sehne", "Knorpel"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Sb?",
    answers: ["Antimon", "Samarium", "Selen", "Strontium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Lesotho?",
    answers: ["Maseru", "Maputo", "Mbabane", "Gaborone"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Name der Rose“?",
    answers: ["Umberto Eco", "Italo Calvino", "Primo Levi", "Alberto Moravia"],
    correct: 0
  },
  {
    question: "Welcher Himmelskörper befindet sich im Zentrum unseres Sonnensystems?",
    answers: ["Erde", "Sonne", "Jupiter", "Mond"],
    correct: 1
  },
  {
    question: "Welches Instrument wird zur Beobachtung weit entfernter Himmelskörper verwendet?",
    answers: ["Mikroskop", "Teleskop", "Periskop", "Stethoskop"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Malawi?",
    answers: ["Blantyre", "Lilongwe", "Mzuzu", "Zomba"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Zahnwalen?",
    answers: ["Pottwal", "Blauwal", "Buckelwal", "Finnwal"],
    correct: 0
  },
  {
    question: "Welches Gebirge erstreckt sich entlang der Westküste Südamerikas?",
    answers: ["Anden", "Alpen", "Rocky Mountains", "Atlas"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Bamako?",
    answers: ["Mali", "Niger", "Tschad", "Mauretanien"],
    correct: 0
  },
  {
    question: "Wer entwickelte die erste erfolgreiche Impfung gegen Pocken?",
    answers: ["Edward Jenner", "Robert Koch", "Louis Pasteur", "Joseph Lister"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Niger?",
    answers: ["Niamey", "Agadez", "Zinder", "Maradi"],
    correct: 0
  },
  {
    question: "Welche Struktur reguliert, wie viel Licht in das menschliche Auge gelangt?",
    answers: ["Pupille", "Netzhaut", "Sehnerv", "Linse"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Rn?",
    answers: ["Radon", "Radium", "Rhenium", "Ruthenium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Mauretanien?",
    answers: ["Nouakchott", "Nouadhibou", "Bamako", "Dakar"],
    correct: 0
  },
  {
    question: "Wie viele Felder hat ein Schachbrett?",
    answers: ["56", "64", "72", "81"],
    correct: 1
  },
  {
    question: "Wer schrieb „Die drei Musketiere“?",
    answers: ["Alexandre Dumas", "Victor Hugo", "Jules Verne", "Honoré de Balzac"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt N'Djamena?",
    answers: ["Tschad", "Niger", "Sudan", "Mali"],
    correct: 0
  },
  {
    question: "Welche Struktur in der Pflanzenzelle ist hauptsächlich für die Photosynthese zuständig?",
    answers: ["Chloroplast", "Zellkern", "Vakuole", "Ribosom"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Cs?",
    answers: ["Cäsium", "Calcium", "Cer", "Cadmium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Gabun?",
    answers: ["Libreville", "Port-Gentil", "Franceville", "Oyem"],
    correct: 0
  },
  {
    question: "Welches Tier ist das größte heute lebende Mitglied der Katzenfamilie?",
    answers: ["Löwe", "Tiger", "Jaguar", "Leopard"],
    correct: 1
  },
  {
    question: "Welche gedachte Linie verläuft bei 0 Grad geografischer Länge?",
    answers: ["Nullmeridian", "Äquator", "Wendekreis des Krebses", "Polarkreis"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Republik Kongo?",
    answers: ["Brazzaville", "Kinshasa", "Pointe-Noire", "Lubumbashi"],
    correct: 0
  },
  {
    question: "Wer komponierte das Oratorium „Messias“?",
    answers: ["Georg Friedrich Händel", "Johann Sebastian Bach", "Joseph Haydn", "Antonio Vivaldi"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Körpers produziert rote Blutkörperchen?",
    answers: ["Knochenmark", "Gallenblase", "Magen", "Schilddrüse"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Kinshasa?",
    answers: ["Demokratische Republik Kongo", "Republik Kongo", "Gabun", "Angola"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol W?",
    answers: ["Wolfram", "Wismut", "Wasserstoff", "Vanadium"],
    correct: 0
  },
  {
    question: "Wie viele Seitenflächen hat eine quadratische Pyramide?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kenia?",
    answers: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Menschenaffen und lebt natürlicherweise auf Borneo und Sumatra?",
    answers: ["Orang-Utan", "Gorilla", "Bonobo", "Gibbon"],
    correct: 0
  },
  {
    question: "Wer schrieb „Hundert Jahre Einsamkeit“?",
    answers: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Isabel Allende"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Antananarivo?",
    answers: ["Madagaskar", "Mauritius", "Mosambik", "Seychellen"],
    correct: 0
  },
  {
    question: "Welche Art von Strahlung verursacht hauptsächlich Sonnenbrand?",
    answers: ["Ultraviolettstrahlung", "Radiowellen", "Mikrowellen", "Infrarotstrahlung"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol V?",
    answers: ["Vanadium", "Vanillin", "Vermium", "Valium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Bahamas?",
    answers: ["Nassau", "Freeport", "Kingston", "Bridgetown"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt acht Arme mit Saugnäpfen?",
    answers: ["Oktopus", "Qualle", "Seestern", "Hummer"],
    correct: 0
  },
  {
    question: "Wie viele Jahre umfasst ein Jahrzehnt?",
    answers: ["5", "10", "20", "25"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Bridgetown?",
    answers: ["Barbados", "Bahamas", "Jamaika", "Grenada"],
    correct: 0
  },
  {
    question: "Wer komponierte das Musikstück „Für Elise“?",
    answers: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Frédéric Chopin", "Johannes Brahms"],
    correct: 0
  },
  {
    question: "Welches Organ nimmt einen Großteil des Alkohols im Körperabbau auf sich?",
    answers: ["Leber", "Lunge", "Milz", "Blase"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Haiti?",
    answers: ["Port-au-Prince", "Cap-Haïtien", "Jacmel", "Les Cayes"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol As?",
    answers: ["Arsen", "Argon", "Astat", "Aluminium"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Frankfurt am Main?",
    answers: ["Main", "Rhein", "Neckar", "Mosel"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Reykjavík?",
    answers: ["Island", "Norwegen", "Finnland", "Dänemark"],
    correct: 0
  },
  {
    question: "Wie nennt man Tiere, deren Körpertemperatur stark von der Umgebungstemperatur abhängt?",
    answers: ["Wechselwarm", "Gleichwarm", "Warmblütig", "Endotherm"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Schöne neue Welt“?",
    answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H. G. Wells"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Bahrain?",
    answers: ["Manama", "Doha", "Kuwait-Stadt", "Maskat"],
    correct: 0
  },
  {
    question: "Welcher Bestandteil einer menschlichen Zelle begrenzt sie nach außen?",
    answers: ["Zellmembran", "Zellkern", "Mitochondrium", "Ribosom"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Cd?",
    answers: ["Cadmium", "Calcium", "Kobalt", "Chrom"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kuwait?",
    answers: ["Kuwait-Stadt", "Manama", "Basra", "Doha"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Großkatzen?",
    answers: ["Jaguar", "Hyäne", "Wolf", "Schakal"],
    correct: 0
  },
  {
    question: "Wie viele Meter sind ein Kilometer?",
    answers: ["100", "500", "1000", "10.000"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Pretoria als Sitz seiner Regierung?",
    answers: ["Südafrika", "Namibia", "Botswana", "Simbabwe"],
    correct: 0
  },
  {
    question: "Wer entwickelte die nach ihm benannte Temperaturskala mit dem absoluten Nullpunkt als Ausgangspunkt?",
    answers: ["William Thomson", "Anders Celsius", "Daniel Fahrenheit", "Blaise Pascal"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Auges bündelt Licht auf der Netzhaut?",
    answers: ["Linse", "Iris", "Sehnerv", "Pupille"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Eritrea?",
    answers: ["Asmara", "Massaua", "Keren", "Assab"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Mo?",
    answers: ["Molybdän", "Mangan", "Magnesium", "Moscovium"],
    correct: 0
  },
  {
    question: "Welcher Ozean liegt östlich von Afrika?",
    answers: ["Indischer Ozean", "Atlantischer Ozean", "Pazifischer Ozean", "Arktischer Ozean"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Mogadischu?",
    answers: ["Somalia", "Eritrea", "Dschibuti", "Äthiopien"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft, die sich mit Insekten beschäftigt?",
    answers: ["Entomologie", "Ornithologie", "Ichthyologie", "Herpetologie"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Graf von Monte Christo“?",
    answers: ["Alexandre Dumas", "Victor Hugo", "Gustave Flaubert", "Émile Zola"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Dschibuti?",
    answers: ["Dschibuti", "Tadjoura", "Ali Sabieh", "Obock"],
    correct: 0
  },
  {
    question: "Welcher Teil des Blutes besteht hauptsächlich aus Wasser?",
    answers: ["Blutplasma", "Blutplättchen", "Erythrozyten", "Leukozyten"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol U?",
    answers: ["Uran", "Ununium", "Uranit", "Urbium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Bolivien gemäß Verfassung?",
    answers: ["Sucre", "La Paz", "Santa Cruz", "Cochabamba"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Primaten?",
    answers: ["Lemur", "Koala", "Faultier", "Waschbär"],
    correct: 0
  },
  {
    question: "Wie viele Millimeter sind ein Zentimeter?",
    answers: ["5", "10", "50", "100"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Colombo nicht als offizielle legislative Hauptstadt, sondern Sri Jayewardenepura Kotte?",
    answers: ["Sri Lanka", "Indien", "Bangladesch", "Nepal"],
    correct: 0
  },
  {
    question: "Wer entdeckte die Radioaktivität des Urans?",
    answers: ["Henri Becquerel", "Marie Curie", "Ernest Rutherford", "Niels Bohr"],
    correct: 0
  },
  {
    question: "Welches Organ ist hauptsächlich für das Hören zuständig?",
    answers: ["Ohr", "Auge", "Nase", "Zunge"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Brunei?",
    answers: ["Bandar Seri Begawan", "Kuala Belait", "Tutong", "Seria"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Rb?",
    answers: ["Rubidium", "Ruthenium", "Radium", "Rhenium"],
    correct: 0
  },
  {
    question: "Welcher Kontinent wird von allen Längengraden durchquert?",
    answers: ["Antarktika", "Afrika", "Asien", "Europa"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Apia?",
    answers: ["Samoa", "Tonga", "Fidschi", "Vanuatu"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft, die sich mit Vögeln beschäftigt?",
    answers: ["Ornithologie", "Entomologie", "Mykologie", "Ichthyologie"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Herr der Ringe“?",
    answers: ["J. R. R. Tolkien", "C. S. Lewis", "George R. R. Martin", "Terry Pratchett"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Tonga?",
    answers: ["Nukuʻalofa", "Apia", "Suva", "Port Vila"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Florenz?",
    answers: ["Arno", "Tiber", "Po", "Etsch"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Sr?",
    answers: ["Strontium", "Schwefel", "Silber", "Samarium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Estland?",
    answers: ["Tallinn", "Riga", "Vilnius", "Tartu"],
    correct: 0
  },
  {
    question: "Welches Tier ist für seine Fähigkeit bekannt, seinen Schwanz abzuwerfen?",
    answers: ["Eidechse", "Frosch", "Schildkröte", "Igel"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Anna Karenina“?",
    answers: ["Leo Tolstoi", "Anton Tschechow", "Nikolai Gogol", "Iwan Turgenew"],
    correct: 0
  },
  {
    question: "Wie viele Knochen hat ein erwachsener Mensch ungefähr?",
    answers: ["106", "206", "306", "406"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt Tallinn?",
    answers: ["Estland", "Lettland", "Litauen", "Finnland"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ga?",
    answers: ["Gallium", "Gadolinium", "Germanium", "Gold"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Themse?",
    answers: ["London", "Dublin", "Edinburgh", "Liverpool"],
    correct: 0
  },
  {
    question: "Welcher Vogel ist für besonders lange Wanderungen zwischen Arktis und Antarktis bekannt?",
    answers: ["Küstenseeschwalbe", "Rotkehlchen", "Amsel", "Haussperling"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nordkorea?",
    answers: ["Pjöngjang", "Seoul", "Busan", "Incheon"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „La Traviata“?",
    answers: ["Giuseppe Verdi", "Giacomo Puccini", "Richard Wagner", "Georges Bizet"],
    correct: 0
  },
  {
    question: "Welcher Knochen befindet sich im Oberarm?",
    answers: ["Humerus", "Femur", "Tibia", "Ulna"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Port Vila?",
    answers: ["Vanuatu", "Fidschi", "Samoa", "Tonga"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ge?",
    answers: ["Germanium", "Gallium", "Gold", "Gadolinium"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von Fischen?",
    answers: ["Ichthyologie", "Ornithologie", "Herpetologie", "Entomologie"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kap Verde?",
    answers: ["Praia", "Mindelo", "Sal", "Boa Vista"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Paarhufern?",
    answers: ["Schwein", "Pferd", "Nashorn", "Tapir"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Fänger im Roggen“?",
    answers: ["J. D. Salinger", "John Steinbeck", "Truman Capote", "Kurt Vonnegut"],
    correct: 0
  },
  {
    question: "Welche Schicht der Atmosphäre liegt direkt über der Troposphäre?",
    answers: ["Stratosphäre", "Mesosphäre", "Thermosphäre", "Exosphäre"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Banjul?",
    answers: ["Gambia", "Senegal", "Guinea", "Sierra Leone"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Re?",
    answers: ["Rhenium", "Radium", "Rubidium", "Ruthenium"],
    correct: 0
  },
  {
    question: "Welcher Teil des Gehirns spielt eine wichtige Rolle bei der Gedächtnisbildung?",
    answers: ["Hippocampus", "Kleinhirn", "Hypophyse", "Sehnerv"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Guinea?",
    answers: ["Conakry", "Bamako", "Freetown", "Monrovia"],
    correct: 0
  },
  {
    question: "Wie viele Spieler hat eine Handballmannschaft gleichzeitig auf dem Feld?",
    answers: ["6", "7", "8", "9"],
    correct: 1
  },
  {
    question: "Wer malte „Die Freiheit führt das Volk“?",
    answers: ["Eugène Delacroix", "Claude Monet", "Édouard Manet", "Paul Cézanne"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Freetown?",
    answers: ["Sierra Leone", "Liberia", "Guinea", "Ghana"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ru?",
    answers: ["Ruthenium", "Rubidium", "Radon", "Rhenium"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Unpaarhufern?",
    answers: ["Pferd", "Kuh", "Kamel", "Hirsch"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Liberia?",
    answers: ["Monrovia", "Freetown", "Accra", "Conakry"],
    correct: 0
  },
  {
    question: "Wer schrieb „Ulysses“?",
    answers: ["James Joyce", "Oscar Wilde", "Samuel Beckett", "George Bernard Shaw"],
    correct: 0
  },
  {
    question: "Wie nennt man die Gesamtheit aller Gene eines Organismus?",
    answers: ["Genom", "Organ", "Gewebe", "Chromatid"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Yamoussoukro?",
    answers: ["Elfenbeinküste", "Ghana", "Togo", "Benin"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Te?",
    answers: ["Tellur", "Titan", "Technetium", "Terbium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Togo?",
    answers: ["Lomé", "Cotonou", "Accra", "Porto-Novo"],
    correct: 0
  },
  {
    question: "Welches Tier hat ein besonders dichtes Fell und lebt häufig in kalten Meeresregionen?",
    answers: ["Seeotter", "Nilpferd", "Tapir", "Gürteltier"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „Tosca“?",
    answers: ["Giacomo Puccini", "Giuseppe Verdi", "Richard Strauss", "Georges Bizet"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Porto-Novo?",
    answers: ["Benin", "Togo", "Ghana", "Nigeria"],
    correct: 0
  },
  {
    question: "Welcher Teil der Niere filtert das Blut?",
    answers: ["Nephron", "Alveole", "Axon", "Ventrikel"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol In?",
    answers: ["Indium", "Iridium", "Iod", "Indigo"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Burkina Faso?",
    answers: ["Ouagadougou", "Bobo-Dioulasso", "Bamako", "Niamey"],
    correct: 0
  },
  {
    question: "Wie viele Saiten hat eine Violine?",
    answers: ["4", "5", "6", "8"],
    correct: 0
  },
  {
    question: "Wer schrieb „Madame Bovary“?",
    answers: ["Gustave Flaubert", "Émile Zola", "Victor Hugo", "Marcel Proust"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Juba?",
    answers: ["Südsudan", "Sudan", "Uganda", "Äthiopien"],
    correct: 0
  },
  {
    question: "Welche Zellbestandteile sind für die Herstellung von Proteinen zuständig?",
    answers: ["Ribosomen", "Lysosomen", "Vakuolen", "Zentriolen"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Tl?",
    answers: ["Thallium", "Titan", "Tellur", "Thorium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Burundi?",
    answers: ["Gitega", "Bujumbura", "Kigali", "Kampala"],
    correct: 0
  },
  {
    question: "Welches Tier ist das größte heute lebende Nagetier?",
    answers: ["Capybara", "Biber", "Stachelschwein", "Murmeltier"],
    correct: 0
  },
  {
    question: "Wer malte „Las Meninas“?",
    answers: ["Diego Velázquez", "Francisco de Goya", "El Greco", "Pablo Picasso"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Malabo?",
    answers: ["Äquatorialguinea", "Gabun", "Kamerun", "Guinea"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Sc?",
    answers: ["Scandium", "Selen", "Silizium", "Samarium"],
    correct: 0
  },
  {
    question: "Wie heißt der Vorgang, bei dem sich eine Zelle in zwei Tochterzellen teilt?",
    answers: ["Mitose", "Osmose", "Diffusion", "Gärung"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von São Tomé und Príncipe?",
    answers: ["São Tomé", "Santo António", "Praia", "Malabo"],
    correct: 0
  },
  {
    question: "Welches Tier kann im Verhältnis zu seinem Körper besonders weit springen?",
    answers: ["Floh", "Maulwurf", "Igel", "Dachs"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Fremde“?",
    answers: ["Albert Camus", "Jean-Paul Sartre", "Marcel Proust", "André Gide"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Victoria?",
    answers: ["Seychellen", "Mauritius", "Malediven", "Fidschi"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Zr?",
    answers: ["Zirconium", "Zink", "Zinn", "Xenon"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Komoren?",
    answers: ["Moroni", "Mutsamudu", "Mamoudzou", "Victoria"],
    correct: 0
  },
  {
    question: "Welcher Teil einer Nervenzelle leitet elektrische Signale vom Zellkörper weg?",
    answers: ["Axon", "Dendrit", "Synapse", "Zellkern"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen bei einer Baseballmannschaft gleichzeitig in der Verteidigung auf dem Feld?",
    answers: ["7", "8", "9", "10"],
    correct: 2
  },
  {
    question: "Welches Land hat die Hauptstadt Honiara?",
    answers: ["Salomonen", "Vanuatu", "Samoa", "Tonga"],
    correct: 0
  },
  {
    question: "Wer komponierte „Die Moldau“?",
    answers: ["Bedřich Smetana", "Antonín Dvořák", "Franz Liszt", "Gustav Mahler"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Nb?",
    answers: ["Niob", "Nickel", "Neon", "Nobelium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Tuvalu?",
    answers: ["Funafuti", "Tarawa", "Majuro", "Apia"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Krebstieren?",
    answers: ["Hummer", "Tintenfisch", "Seestern", "Qualle"],
    correct: 0
  },
  {
    question: "Wer schrieb „Die Brüder Karamasow“?",
    answers: ["Fjodor Dostojewski", "Leo Tolstoi", "Anton Tschechow", "Nikolai Gogol"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Majuro?",
    answers: ["Marshallinseln", "Mikronesien", "Palau", "Kiribati"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Hf?",
    answers: ["Hafnium", "Helium", "Holmium", "Hassium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kiribati?",
    answers: ["South Tarawa", "Majuro", "Funafuti", "Ngerulmud"],
    correct: 0
  },
  {
    question: "Wie nennt man die dünne Grenzschicht zwischen zwei Nervenzellen?",
    answers: ["Synapse", "Sehne", "Alveole", "Knorpel"],
    correct: 0
  },
  {
    question: "Welcher Künstler malte „Nighthawks“?",
    answers: ["Edward Hopper", "Grant Wood", "Andy Warhol", "Roy Lichtenstein"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Ngerulmud?",
    answers: ["Palau", "Mikronesien", "Marshallinseln", "Nauru"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ir?",
    answers: ["Iridium", "Indium", "Iod", "Eisen"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Mikronesien?",
    answers: ["Palikir", "Kolonia", "Majuro", "Koror"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Weichtieren?",
    answers: ["Schnecke", "Krabbe", "Seestern", "Qualle"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der große Gatsby“?",
    answers: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
    correct: 0
  },
  {
    question: "Welches Land hat keine offiziell festgelegte Hauptstadt, wobei Yaren de facto als Regierungssitz gilt?",
    answers: ["Nauru", "Tuvalu", "Palau", "Kiribati"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Os?",
    answers: ["Osmium", "Sauerstoff", "Gold", "Oganesson"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Innenohrs ist besonders für den Gleichgewichtssinn wichtig?",
    answers: ["Bogengänge", "Trommelfell", "Ohrläppchen", "Gehörgang"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Osttimor?",
    answers: ["Dili", "Baucau", "Kupang", "Manado"],
    correct: 0
  },
  {
    question: "Welcher Vogel kann rückwärts fliegen?",
    answers: ["Kolibri", "Adler", "Möwe", "Specht"],
    correct: 0
  },
  {
    question: "Wer komponierte die „Peer-Gynt-Suite“?",
    answers: ["Edvard Grieg", "Jean Sibelius", "Antonín Dvořák", "Franz Liszt"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Georgetown?",
    answers: ["Guyana", "Suriname", "Belize", "Barbados"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol La?",
    answers: ["Lanthan", "Lithium", "Lutetium", "Lawrencium"],
    correct: 0
  },
  {
    question: "Wie heißt die größte Arterie des menschlichen Körpers?",
    answers: ["Aorta", "Hohlvene", "Halsschlagader", "Lungenvene"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Eswatini im Verwaltungssinn?",
    answers: ["Mbabane", "Lobamba", "Maseru", "Manzini"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Stachelhäutern?",
    answers: ["Seeigel", "Hummer", "Tintenfisch", "Qualle"],
    correct: 0
  },
  {
    question: "Wer schrieb „Lolita“?",
    answers: ["Vladimir Nabokov", "Boris Pasternak", "Aleksandr Solschenizyn", "Michail Bulgakow"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Roseau?",
    answers: ["Dominica", "Grenada", "Barbados", "St. Lucia"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ce?",
    answers: ["Cer", "Cäsium", "Calcium", "Cadmium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Grenada?",
    answers: ["St. George's", "Roseau", "Castries", "Kingstown"],
    correct: 0
  },
  {
    question: "Welcher Teil des Skeletts besteht aus sieben Halswirbeln?",
    answers: ["Halswirbelsäule", "Lendenwirbelsäule", "Brustwirbelsäule", "Kreuzbein"],
    correct: 0
  },
  {
    question: "Wer malte „Die Arnolfini-Hochzeit“?",
    answers: ["Jan van Eyck", "Rembrandt", "Vermeer", "Rubens"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Castries?",
    answers: ["St. Lucia", "Dominica", "Grenada", "Barbados"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Nd?",
    answers: ["Neodym", "Neon", "Natrium", "Nobelium"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von St. Vincent und den Grenadinen?",
    answers: ["Kingstown", "Georgetown", "Bridgetown", "Basseterre"],
    correct: 0
  },
  {
    question: "Wie nennt man den roten Farbstoff in Muskeln, der Sauerstoff binden kann?",
    answers: ["Myoglobin", "Melanin", "Keratin", "Insulin"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt einen Schnabel, legt Eier und säugt seine Jungen?",
    answers: ["Schnabeltier", "Pinguin", "Schildkröte", "Kiwi"],
    correct: 0
  },
  {
    question: "Wer schrieb „Doktor Schiwago“?",
    answers: ["Boris Pasternak", "Leo Tolstoi", "Maxim Gorki", "Anton Tschechow"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Basseterre?",
    answers: ["St. Kitts und Nevis", "Antigua und Barbuda", "St. Lucia", "Dominica"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Pr?",
    answers: ["Praseodym", "Promethium", "Protactinium", "Platin"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Antigua und Barbuda?",
    answers: ["St. John's", "Basseterre", "Kingstown", "Castries"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Sm?",
    answers: ["Samarium", "Selen", "Strontium", "Scandium"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Basel?",
    answers: ["Rhein", "Rhone", "Aare", "Inn"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Schuppentieren?",
    answers: ["Pangolin", "Gürteltier", "Ameisenbär", "Faultier"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Wuthering Heights“?",
    answers: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "George Eliot"],
    correct: 0
  },
  {
    question: "Wie viele Seiten hat ein Heptagon?",
    answers: ["6", "7", "8", "9"],
    correct: 1
  },
  {
    question: "Welches Land hat die Hauptstadt St. John's?",
    answers: ["Antigua und Barbuda", "Dominica", "Grenada", "Barbados"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Eu?",
    answers: ["Europium", "Einsteinium", "Erbium", "Eisen"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Donau?",
    answers: ["Belgrad", "Madrid", "Lissabon", "Oslo"],
    correct: 0
  },
  {
    question: "Welcher Vogel ist der kleinste heute lebende Vogel?",
    answers: ["Bienenelfe", "Zaunkönig", "Kolibri", "Meise"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Andorra?",
    answers: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Ordino"],
    correct: 0
  },
  {
    question: "Wer komponierte die „Unvollendete“ Sinfonie?",
    answers: ["Franz Schubert", "Johannes Brahms", "Anton Bruckner", "Gustav Mahler"],
    correct: 0
  },
  {
    question: "Welcher Knochen befindet sich im Oberschenkel?",
    answers: ["Femur", "Humerus", "Radius", "Fibula"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Vaduz?",
    answers: ["Liechtenstein", "Luxemburg", "Monaco", "Andorra"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Gd?",
    answers: ["Gadolinium", "Gallium", "Germanium", "Gold"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von Reptilien und Amphibien?",
    answers: ["Herpetologie", "Entomologie", "Ichthyologie", "Ornithologie"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Monaco?",
    answers: ["Monaco", "Monte-Carlo", "La Condamine", "Fontvieille"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Kloakentieren?",
    answers: ["Ameisenigel", "Koala", "Wombat", "Opossum"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Zauberberg“?",
    answers: ["Thomas Mann", "Hermann Hesse", "Heinrich Mann", "Stefan Zweig"],
    correct: 0
  },
  {
    question: "Welche Schicht der Atmosphäre liegt über der Stratosphäre?",
    answers: ["Mesosphäre", "Troposphäre", "Exosphäre", "Ionosphäre"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt San Marino?",
    answers: ["San Marino", "Malta", "Monaco", "Andorra"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Tb?",
    answers: ["Terbium", "Tellur", "Thallium", "Titan"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Gehirns steuert viele hormonelle Vorgänge?",
    answers: ["Hypothalamus", "Kleinhirn", "Hippocampus", "Sehnerv"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Liechtenstein?",
    answers: ["Vaduz", "Schaan", "Balzers", "Triesen"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen beim Eishockey pro Mannschaft normalerweise gleichzeitig auf dem Eis?",
    answers: ["5", "6", "7", "8"],
    correct: 1
  },
  {
    question: "Wer malte „Der Garten der Lüste“?",
    answers: ["Hieronymus Bosch", "Albrecht Dürer", "Pieter Bruegel", "Jan van Eyck"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Minsk?",
    answers: ["Belarus", "Ukraine", "Litauen", "Moldau"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Dy?",
    answers: ["Dysprosium", "Dubnium", "Darmstadtium", "Dysium"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Hasenartigen?",
    answers: ["Kaninchen", "Murmeltier", "Biber", "Eichhörnchen"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt der Ukraine?",
    answers: ["Kyjiw", "Lwiw", "Odessa", "Charkiw"],
    correct: 0
  },
  {
    question: "Wer schrieb „Effi Briest“?",
    answers: ["Theodor Fontane", "Heinrich Heine", "Thomas Mann", "Gerhart Hauptmann"],
    correct: 0
  },
  {
    question: "Wie nennt man den Bereich eines Flusses, an dem er ins Meer mündet?",
    answers: ["Mündung", "Quelle", "Delta", "Ufer"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Chișinău?",
    answers: ["Moldau", "Rumänien", "Bulgarien", "Serbien"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ho?",
    answers: ["Holmium", "Hafnium", "Helium", "Hassium"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Elbe?",
    answers: ["Magdeburg", "München", "Mainz", "Dortmund"],
    correct: 0
  },
  {
    question: "Welches Tier ist das größte heute lebende Beuteltier?",
    answers: ["Rotes Riesenkänguru", "Koala", "Wombat", "Tasmanischer Teufel"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von San Marino?",
    answers: ["San Marino", "Serravalle", "Borgo Maggiore", "Domagnano"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „Rigoletto“?",
    answers: ["Giuseppe Verdi", "Giacomo Puccini", "Gioachino Rossini", "Gaetano Donizetti"],
    correct: 0
  },
  {
    question: "Welche Struktur des menschlichen Körpers verbindet den Unterarm mit der Hand?",
    answers: ["Handgelenk", "Ellenbogen", "Schulter", "Kniescheibe"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Ljubljana?",
    answers: ["Slowenien", "Slowakei", "Kroatien", "Serbien"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Er?",
    answers: ["Erbium", "Einsteinium", "Europium", "Eisen"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von den Ozeanen?",
    answers: ["Ozeanografie", "Limnologie", "Hydrologie", "Geodäsie"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nordzypern de facto?",
    answers: ["Nord-Nikosia", "Famagusta", "Kyrenia", "Morphou"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Rüsselspringern?",
    answers: ["Elefantenspitzmaus", "Springmaus", "Maulwurf", "Spitzmaus"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Steppenwolf“?",
    answers: ["Hermann Hesse", "Thomas Mann", "Franz Kafka", "Bertolt Brecht"],
    correct: 0
  },
  {
    question: "Welche Schicht der Erde ist größtenteils flüssig?",
    answers: ["Äußerer Kern", "Innerer Kern", "Erdkruste", "Lithosphäre"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Sarajevo?",
    answers: ["Bosnien und Herzegowina", "Serbien", "Kroatien", "Montenegro"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Tm?",
    answers: ["Thulium", "Thorium", "Thallium", "Tellur"],
    correct: 0
  },
  {
    question: "Welcher Teil des Auges enthält die lichtempfindlichen Sinneszellen?",
    answers: ["Netzhaut", "Iris", "Hornhaut", "Linse"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kosovo?",
    answers: ["Pristina", "Prizren", "Peja", "Mitrovica"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen bei einer Rugby-Union-Mannschaft normalerweise gleichzeitig auf dem Feld?",
    answers: ["11", "13", "15", "17"],
    correct: 2
  },
  {
    question: "Wer malte „Die Schule von Athen“?",
    answers: ["Raffael", "Michelangelo", "Leonardo da Vinci", "Tizian"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Podgorica?",
    answers: ["Montenegro", "Albanien", "Serbien", "Nordmazedonien"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Yb?",
    answers: ["Ytterbium", "Yttrium", "Ytterium", "Ytternium"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Mardern?",
    answers: ["Fischotter", "Fuchs", "Luchs", "Wolf"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Kosovo?",
    answers: ["Pristina", "Skopje", "Tirana", "Podgorica"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Besuch der alten Dame“?",
    answers: ["Friedrich Dürrenmatt", "Max Frisch", "Bertolt Brecht", "Heinrich Böll"],
    correct: 0
  },
  {
    question: "Wie nennt man die Lehre von den Binnengewässern?",
    answers: ["Limnologie", "Ozeanografie", "Meteorologie", "Geologie"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Skopje?",
    answers: ["Nordmazedonien", "Albanien", "Bulgarien", "Serbien"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Lu?",
    answers: ["Lutetium", "Lithium", "Lanthan", "Lawrencium"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Weichsel?",
    answers: ["Krakau", "Prag", "Wien", "Zagreb"],
    correct: 0
  },
  {
    question: "Welches Tier ist für seine Fähigkeit bekannt, sich zu einer Kugel zusammenzurollen?",
    answers: ["Gürteltier", "Otter", "Biber", "Luchs"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Nordmazedonien?",
    answers: ["Skopje", "Bitola", "Ohrid", "Tetovo"],
    correct: 0
  },
  {
    question: "Wer komponierte „Die Planeten“?",
    answers: ["Gustav Holst", "Edward Elgar", "Ralph Vaughan Williams", "Benjamin Britten"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Körpers enthält die Patella?",
    answers: ["Knie", "Schulter", "Hand", "Hüfte"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Tirana?",
    answers: ["Albanien", "Kosovo", "Montenegro", "Nordmazedonien"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Ac?",
    answers: ["Actinium", "Americium", "Antimon", "Argon"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von den Böden?",
    answers: ["Bodenkunde", "Hydrologie", "Meteorologie", "Paläontologie"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Andorra?",
    answers: ["Andorra la Vella", "Encamp", "Canillo", "La Massana"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Seekühen?",
    answers: ["Manati", "Walross", "Seelöwe", "Dugongfisch"],
    correct: 0
  },
  {
    question: "Wer schrieb „Nathan der Weise“?",
    answers: ["Gotthold Ephraim Lessing", "Friedrich Schiller", "Johann Wolfgang von Goethe", "Heinrich von Kleist"],
    correct: 0
  },
  {
    question: "Welche Schicht der Erde ist am dünnsten?",
    answers: ["Erdkruste", "Erdmantel", "Äußerer Kern", "Innerer Kern"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Luxemburg?",
    answers: ["Luxemburg", "Belgien", "Liechtenstein", "Monaco"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Pa?",
    answers: ["Protactinium", "Palladium", "Platin", "Polonium"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Ohres trennt Außen- und Mittelohr?",
    answers: ["Trommelfell", "Schnecke", "Bogengang", "Ohrtrompete"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Vatikanstadt?",
    answers: ["Vatikanstadt", "Rom", "Lateran", "Castel Gandolfo"],
    correct: 0
  },
  {
    question: "Wie viele Spieler stehen beim Wasserball pro Mannschaft gleichzeitig im Wasser?",
    answers: ["6", "7", "8", "9"],
    correct: 1
  },
  {
    question: "Wer malte „Die Erschaffung Adams“?",
    answers: ["Michelangelo", "Raffael", "Leonardo da Vinci", "Botticelli"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Bern?",
    answers: ["Schweiz", "Österreich", "Liechtenstein", "Luxemburg"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Np?",
    answers: ["Neptunium", "Nobelium", "Neon", "Niob"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Primaten und lebt ausschließlich auf Madagaskar?",
    answers: ["Lemur", "Gibbon", "Makak", "Pavian"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Monaco?",
    answers: ["Monaco", "Monte-Carlo", "Menton", "Nizza"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der zerbrochne Krug“?",
    answers: ["Heinrich von Kleist", "Georg Büchner", "Theodor Fontane", "Friedrich Hebbel"],
    correct: 0
  },
  {
    question: "Wie nennt man den Punkt, an dem ein Fluss beginnt?",
    answers: ["Quelle", "Mündung", "Delta", "Bucht"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Valletta?",
    answers: ["Malta", "Zypern", "Monaco", "San Marino"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Pu?",
    answers: ["Plutonium", "Polonium", "Protactinium", "Palladium"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Rhone?",
    answers: ["Lyon", "Hamburg", "Prag", "Warschau"],
    correct: 0
  },
  {
    question: "Welches Tier besitzt die längsten Eckzähne unter den heute lebenden Meeressäugern?",
    answers: ["Walross", "Delfin", "Seehund", "Orca"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Zypern?",
    answers: ["Nikosia", "Limassol", "Larnaka", "Paphos"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „Fidelio“?",
    answers: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Richard Wagner", "Carl Maria von Weber"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Körpers enthält die Ulna?",
    answers: ["Unterarm", "Oberschenkel", "Unterschenkel", "Oberarm"],
    correct: 0
  },
  {
    question: "Welches Land hat die Hauptstadt Dublin?",
    answers: ["Irland", "Island", "Schottland", "Wales"],
    correct: 0
  },
  {
    question: "Welches chemische Element hat das Symbol Am?",
    answers: ["Americium", "Actinium", "Antimon", "Argon"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von Seen und Flüssen?",
    answers: ["Limnologie", "Geodäsie", "Vulkanologie", "Astronomie"],
    correct: 0
  },
  {
    question: "Welche Stadt ist die Hauptstadt von Schottland?",
    answers: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Zahnarmen?",
    answers: ["Ameisenbär", "Tapir", "Biber", "Marder"],
    correct: 0
  },
  {
    question: "Wer schrieb „Buddenbrooks“?",
    answers: ["Thomas Mann", "Heinrich Böll", "Hermann Hesse", "Theodor Fontane"],
    correct: 0
  },
  {
    question: "In welchem Jahr fiel die Berliner Mauer?",
    answers: ["1987", "1989", "1991", "1993"],
    correct: 1
  },
  {
    question: "Welches Metall wird hauptsächlich aus Bauxit gewonnen?",
    answers: ["Kupfer", "Aluminium", "Zink", "Blei"],
    correct: 1
  },
  {
    question: "Welche Stadt liegt am Fluss Seine?",
    answers: ["Paris", "Brüssel", "Amsterdam", "Mailand"],
    correct: 0
  },
  {
    question: "Wer war der erste Mensch auf dem Mond?",
    answers: ["Buzz Aldrin", "Neil Armstrong", "Juri Gagarin", "John Glenn"],
    correct: 1
  },
  {
    question: "Welches Organ ist hauptsächlich für den Geruchssinn zuständig?",
    answers: ["Nase", "Zunge", "Ohr", "Auge"],
    correct: 0
  },
  {
    question: "Welcher Kontinent ist flächenmäßig der kleinste?",
    answers: ["Europa", "Australien", "Südamerika", "Antarktika"],
    correct: 1
  },
  {
    question: "Welche Einheit wird für die Lichtstärke verwendet?",
    answers: ["Candela", "Lux", "Lumen", "Kelvin"],
    correct: 0
  },
  {
    question: "Wer schrieb das Drama „Kabale und Liebe“?",
    answers: ["Friedrich Schiller", "Heinrich von Kleist", "Gotthold Ephraim Lessing", "Georg Büchner"],
    correct: 0
  },
  {
    question: "Wie viele Streifen hat die Flagge der USA?",
    answers: ["10", "12", "13", "15"],
    correct: 2
  },
  {
    question: "Welches Land wird häufig mit der Form eines langen, schmalen Streifens an der Westküste Südamerikas verbunden?",
    answers: ["Chile", "Peru", "Ecuador", "Kolumbien"],
    correct: 0
  },
  {
    question: "Welcher Stoff ist der Hauptbestandteil von Diamanten?",
    answers: ["Kohlenstoff", "Silizium", "Kalzium", "Eisen"],
    correct: 0
  },
  {
    question: "Wer malte „Impression, Sonnenaufgang“?",
    answers: ["Claude Monet", "Édouard Manet", "Pierre-Auguste Renoir", "Edgar Degas"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Tiber?",
    answers: ["Rom", "Neapel", "Mailand", "Venedig"],
    correct: 0
  },
  {
    question: "Wie nennt man den Vorgang, bei dem Eis zu Wasser wird?",
    answers: ["Schmelzen", "Verdampfen", "Kondensieren", "Sublimieren"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Großkatzen Afrikas?",
    answers: ["Löwe", "Puma", "Jaguar", "Luchs"],
    correct: 0
  },
  {
    question: "Wer entwickelte das Periodensystem der Elemente maßgeblich?",
    answers: ["Dmitri Mendelejew", "Niels Bohr", "Michael Faraday", "Ernest Rutherford"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Main?",
    answers: ["Frankfurt", "Leipzig", "Bremen", "Hannover"],
    correct: 0
  },
  {
    question: "Welche Sprache wird hauptsächlich in Argentinien gesprochen?",
    answers: ["Spanisch", "Portugiesisch", "Italienisch", "Französisch"],
    correct: 0
  },
  {
    question: "Welches Organ ist für die Bildung vieler Immunzellen wichtig und liegt hinter dem Brustbein?",
    answers: ["Thymus", "Milz", "Leber", "Schilddrüse"],
    correct: 0
  },
  {
    question: "Wie viele Seiten hat ein Ikosaeder?",
    answers: ["12", "16", "20", "24"],
    correct: 2
  },
  {
    question: "Wer schrieb „Reise um die Erde in 80 Tagen“?",
    answers: ["Jules Verne", "Daniel Defoe", "Robert Louis Stevenson", "H. G. Wells"],
    correct: 0
  },
  {
    question: "Welcher Stoff wird in Bleistiftminen verwendet?",
    answers: ["Graphit", "Blei", "Kohle", "Silizium"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Neckar?",
    answers: ["Heidelberg", "Dresden", "Kassel", "Bonn"],
    correct: 0
  },
  {
    question: "Welche Farbe entsteht beim Mischen von Rot und Blau?",
    answers: ["Violett", "Grün", "Orange", "Braun"],
    correct: 0
  },
  {
    question: "Wer war der erste Mensch im Weltraum?",
    answers: ["Juri Gagarin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Walen?",
    answers: ["Orca", "Walross", "Seelöwe", "Robbe"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Spree?",
    answers: ["Berlin", "München", "Köln", "Stuttgart"],
    correct: 0
  },
  {
    question: "Wie nennt man die kleinste funktionelle Einheit der Niere?",
    answers: ["Nephron", "Neuron", "Alveole", "Axon"],
    correct: 0
  },
  {
    question: "Welcher Planet ist von der Sonne aus gesehen der dritte?",
    answers: ["Erde", "Mars", "Venus", "Jupiter"],
    correct: 0
  },
  {
    question: "Wer schrieb die Tragödie „Hamlet“?",
    answers: ["William Shakespeare", "Christopher Marlowe", "Charles Dickens", "Oscar Wilde"],
    correct: 0
  },
  {
    question: "Welche Einheit wird für die Beleuchtungsstärke verwendet?",
    answers: ["Lux", "Candela", "Lumen", "Watt"],
    correct: 0
  },
  {
    question: "Welcher Fluss fließt durch Düsseldorf?",
    answers: ["Rhein", "Elbe", "Weser", "Donau"],
    correct: 0
  },
  {
    question: "Welche Blutgruppe gilt im AB0-System als Universalempfänger für rote Blutkörperchen?",
    answers: ["AB", "0", "A", "B"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Raubbeutlern?",
    answers: ["Tasmanischer Teufel", "Koala", "Wombat", "Känguru"],
    correct: 0
  },
  {
    question: "Wer malte „Das Frühstück im Grünen“?",
    answers: ["Édouard Manet", "Claude Monet", "Paul Gauguin", "Edgar Degas"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Po?",
    answers: ["Turin", "Rom", "Florenz", "Neapel"],
    correct: 0
  },
  {
    question: "Welcher Bestandteil des Auges verändert seine Form zum Scharfstellen?",
    answers: ["Linse", "Iris", "Netzhaut", "Hornhaut"],
    correct: 0
  },
  {
    question: "Wie viele Planeten sind größer als die Erde?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Wer schrieb „Der Richter und sein Henker“?",
    answers: ["Friedrich Dürrenmatt", "Max Frisch", "Hermann Hesse", "Heinrich Böll"],
    correct: 0
  },
  {
    question: "Welches Gas wird häufig zum Füllen von Ballons verwendet, weil es leichter als Luft und nicht brennbar ist?",
    answers: ["Helium", "Sauerstoff", "Stickstoff", "Argon"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Etsch?",
    answers: ["Verona", "Bologna", "Genua", "Pisa"],
    correct: 0
  },
  {
    question: "Wie nennt man die männliche Keimzelle beim Menschen?",
    answers: ["Spermium", "Eizelle", "Zygote", "Embryo"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Hornträgern?",
    answers: ["Ziege", "Pferd", "Schwein", "Tapir"],
    correct: 0
  },
  {
    question: "Wer komponierte die Oper „Der Freischütz“?",
    answers: ["Carl Maria von Weber", "Richard Wagner", "Johannes Brahms", "Franz Schubert"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Salzach?",
    answers: ["Salzburg", "Graz", "Innsbruck", "Linz"],
    correct: 0
  },
  {
    question: "Welches chemische Element ist bei Raumtemperatur ein Gas und wird in Leuchtreklamen verwendet?",
    answers: ["Neon", "Eisen", "Kupfer", "Silber"],
    correct: 0
  },
  {
    question: "Wie viele Flächen hat ein Würfel insgesamt?",
    answers: ["6", "8", "10", "12"],
    correct: 0
  },
  {
    question: "Wer schrieb „Die Räuber“?",
    answers: ["Friedrich Schiller", "Johann Wolfgang von Goethe", "Heinrich Heine", "Georg Büchner"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Maas?",
    answers: ["Maastricht", "Amsterdam", "Rotterdam", "Utrecht"],
    correct: 0
  },
  {
    question: "Welcher Teil des menschlichen Gehirns ist besonders für Sprache und komplexes Denken wichtig?",
    answers: ["Großhirn", "Kleinhirn", "Hirnstamm", "Rückenmark"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Huftieren?",
    answers: ["Nashorn", "Luchs", "Otter", "Dachs"],
    correct: 0
  },
  {
    question: "Wer malte „Der Wanderer über dem Nebelmeer“?",
    answers: ["Caspar David Friedrich", "Carl Spitzweg", "Adolph Menzel", "Max Liebermann"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Inn?",
    answers: ["Innsbruck", "Wien", "Bern", "Basel"],
    correct: 0
  },
  {
    question: "Welches Vitamin ist besonders wichtig für die Blutgerinnung?",
    answers: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"],
    correct: 0
  },
  {
    question: "Wie viele Kanten hat ein Würfel?",
    answers: ["8", "10", "12", "14"],
    correct: 2
  },
  {
    question: "Wer schrieb „Der Schimmelreiter“?",
    answers: ["Theodor Storm", "Theodor Fontane", "Heinrich Heine", "Gottfried Keller"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Mosel?",
    answers: ["Trier", "Hannover", "Leipzig", "Münster"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Robben?",
    answers: ["Seehund", "Delfin", "Otter", "Biber"],
    correct: 0
  },
  {
    question: "Welcher Stoff ist der wichtigste Energieträger in menschlichen Zellen?",
    answers: ["ATP", "DNA", "RNA", "Keratin"],
    correct: 0
  },
  {
    question: "Wer komponierte „Die Fledermaus“?",
    answers: ["Johann Strauss", "Franz Lehár", "Richard Strauss", "Gustav Mahler"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Limmat?",
    answers: ["Zürich", "Bern", "Genf", "Lausanne"],
    correct: 0
  },
  {
    question: "Wie viele Ecken hat ein Würfel?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    question: "Welches Tier gehört zu den Primaten?",
    answers: ["Schimpanse", "Panda", "Koala", "Otter"],
    correct: 0
  },
  {
    question: "Wer schrieb den Roman „Der Glöckner von Notre-Dame“?",
    answers: ["Victor Hugo", "Alexandre Dumas", "Émile Zola", "Jules Verne"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Douro?",
    answers: ["Porto", "Madrid", "Barcelona", "Sevilla"],
    correct: 0
  },
  {
    question: "Welches Organ produziert die Verdauungssäure im menschlichen Körper?",
    answers: ["Magen", "Leber", "Niere", "Milz"],
    correct: 0
  },
  {
    question: "Welcher Stoff wird bei der Fotosynthese neben Sauerstoff als energiereicher Stoff aufgebaut?",
    answers: ["Glucose", "Stickstoff", "Helium", "Salz"],
    correct: 0
  },
  {
    question: "Wer malte „Die Sonnenblumen“?",
    answers: ["Vincent van Gogh", "Claude Monet", "Paul Cézanne", "Paul Klee"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt an der Moldau?",
    answers: ["Prag", "Bratislava", "Budapest", "Ljubljana"],
    correct: 0
  },
  {
    question: "Wie nennt man die Lehre von den Sternbildern und Himmelskörpern wissenschaftlich?",
    answers: ["Astronomie", "Astrologie", "Geografie", "Meteorologie"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Paarhufern?",
    answers: ["Giraffe", "Pferd", "Nashorn", "Zebra"],
    correct: 0
  },
  {
    question: "Wer schrieb „Emilia Galotti“?",
    answers: ["Gotthold Ephraim Lessing", "Friedrich Schiller", "Heinrich von Kleist", "Georg Büchner"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Dnjepr?",
    answers: ["Kyjiw", "Bukarest", "Sofia", "Riga"],
    correct: 0
  },
  {
    question: "Welcher Teil einer Pflanze transportiert Wasser von den Wurzeln nach oben?",
    answers: ["Xylem", "Phloem", "Pollen", "Stempel"],
    correct: 0
  },
  {
    question: "Wie viele Ecken hat ein Tetraeder?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Wer komponierte die „Carmina Burana“?",
    answers: ["Carl Orff", "Richard Strauss", "Gustav Mahler", "Anton Bruckner"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Guadalquivir?",
    answers: ["Sevilla", "Madrid", "Valencia", "Bilbao"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Echsen?",
    answers: ["Leguan", "Frosch", "Salamander", "Molch"],
    correct: 0
  },
  {
    question: "Welche Struktur im menschlichen Körper enthält die kleinsten Blutgefäße?",
    answers: ["Kapillarnetz", "Aorta", "Hohlvene", "Lymphknoten"],
    correct: 0
  },
  {
    question: "Wer schrieb „Woyzeck“?",
    answers: ["Georg Büchner", "Heinrich Heine", "Friedrich Hebbel", "Theodor Storm"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Rhône?",
    answers: ["Genf", "Zürich", "Bern", "Basel"],
    correct: 0
  },
  {
    question: "Welcher Planet besitzt die meisten bekannten Monde?",
    answers: ["Saturn", "Jupiter", "Uranus", "Neptun"],
    correct: 0
  },
  {
    question: "Wie viele Kanten hat ein Tetraeder?",
    answers: ["4", "5", "6", "8"],
    correct: 2
  },
  {
    question: "Wer malte „Der Kuss“?",
    answers: ["Gustav Klimt", "Egon Schiele", "Edvard Munch", "Paul Klee"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Mersey?",
    answers: ["Liverpool", "Manchester", "Bristol", "Leeds"],
    correct: 0
  },
  {
    question: "Welcher Bestandteil des menschlichen Blutes transportiert Hormone und Nährstoffe?",
    answers: ["Blutplasma", "Blutplättchen", "Erythrozyten", "Leukozyten"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Amphibien?",
    answers: ["Molch", "Gecko", "Chamäleon", "Leguan"],
    correct: 0
  },
  {
    question: "Wer schrieb „Der Sandmann“?",
    answers: ["E. T. A. Hoffmann", "Heinrich Heine", "Novalis", "Theodor Storm"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Shannon?",
    answers: ["Limerick", "Dublin", "Belfast", "Cork"],
    correct: 0
  },
  {
    question: "Wie nennt man die Umwandlung von Zucker ohne Sauerstoff, etwa durch Hefen?",
    answers: ["Gärung", "Photosynthese", "Osmose", "Sublimation"],
    correct: 0
  },
  {
    question: "Wie viele Flächen hat ein Oktaeder?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    question: "Wer komponierte „Also sprach Zarathustra“?",
    answers: ["Richard Strauss", "Johann Strauss", "Gustav Mahler", "Richard Wagner"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Garonne?",
    answers: ["Bordeaux", "Lyon", "Nizza", "Straßburg"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Krokodilen?",
    answers: ["Alligator", "Leguan", "Gecko", "Warane"],
    correct: 0
  },
  {
    question: "Welche Struktur des menschlichen Körpers verbindet den Rachen mit der Luftröhre?",
    answers: ["Kehlkopf", "Speiseröhre", "Zwerchfell", "Bronchie"],
    correct: 0
  },
  {
    question: "Wer schrieb „Die Physiker“?",
    answers: ["Friedrich Dürrenmatt", "Max Frisch", "Bertolt Brecht", "Heinrich Böll"],
    correct: 0
  },
  {
    question: "Welche Stadt liegt am Fluss Tejo?",
    answers: ["Lissabon", "Porto", "Madrid", "Barcelona"],
    correct: 0
  },
  {
    question: "Wie nennt man die Wissenschaft von der Struktur und Funktion des Körpers?",
    answers: ["Anatomie", "Geologie", "Astronomie", "Botanik"],
    correct: 0
  },
  {
    question: "Welches Tier gehört zu den Beutegreifern und lebt hauptsächlich in Australien?",
    answers: ["Dingo", "Fennek", "Schakal", "Kojote"],
    correct: 0
  },
  {
    question: "Wer malte „Die Heuwagen“?",
    answers: ["John Constable", "William Turner", "Thomas Gainsborough", "Joshua Reynolds"],
    correct: 0
  }

];


/*
  ======================================================
  AB HIER MUSST DU NORMALERWEISE NICHTS ÄNDERN
  ======================================================
*/


// Wie viele Fragen soll ein Quiz enthalten?
const NUMBER_OF_QUESTIONS = 10;


// Fisher-Yates-Mischalgorithmus
function shuffleQuestions(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [copy[i], copy[j]] =
      [copy[j], copy[i]];
  }

  return copy;
}


// Zufällige Fragen für diesen Durchgang auswählen
let quiz = [];

function createNewQuiz() {
  quiz = shuffleQuestions(questionPool)
    .slice(0, NUMBER_OF_QUESTIONS);
}
