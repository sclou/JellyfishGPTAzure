import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Who is Jellyfish?",
        value: "Who is Jellyfish?"
    },
    { text: "When was Jellyfish Founded?", value: "WHen was Jellyfish Founded" },
    { text: "What Paid Media Services does Jellyfish Offer?", value: "What Paid Media Services does Jellyfish Offer?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
