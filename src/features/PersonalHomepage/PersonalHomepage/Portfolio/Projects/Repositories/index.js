import { List, Name, Tile } from "./styled";

export const Repositories = ({ repositories }) => (

    <List>
        {repositories.map(({ id, name, description, hompage, html_url }) => (
            <Tile key={id}>
                <Name>{name}</Name>
            </Tile>
        ))}
    </List>
);