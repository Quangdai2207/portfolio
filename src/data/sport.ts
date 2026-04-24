import fitness from "../assets/fitness.jpg"
import running from "../assets/running.jpg"
import kungfu from "../assets/kungfu.jpg"


export interface Sport {
  id: number;
  label: string;
  image: string;
  alt: string
  witdh: number
}

export const mySports: Sport[] = [
  {
    id: 0,
    label: "Runnning",
    image: running,
    alt: "Running",
    witdh: 300
  },
  {
    id: 1,
    label: "Fitness",
    image: fitness,
    alt: "Fitness",
    witdh: 300
  },
  {
    id: 2,
    label: "Kungfu",
    image: kungfu,
    alt: "Kungfu",
    witdh: 300
  },
];
