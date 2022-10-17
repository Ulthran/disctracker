/* eslint-disable */
import React, { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, TextField, Button } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

import { API, Auth } from 'aws-amplify'
import { listRosters } from '../graphql/queries';

export default function HomeScreen(props) {
    const { overrides, ...rest } = props;

    const [rosters, setRosters] = useState([])

    console.log("HEYYYYY")

    useEffect(
        React.useCallback(() => {
          Auth.currentAuthenticatedUser()
            .then((user) => {
              API.graphql(
                graphqlOperation(listRosters)
              )
                .then((res) => {
                  console.log(res.data.listRosters.items);
                  setRosters(res.data.listInvites.items);
                })
                .catch((e) => {
                  console.log(e);
                });
            })
            .catch((e) => {
              console.error(e);
            });
    
          return () => {
            console.log("Home screen lost focus");
          };
        }, [])
    );

    return (
        <Flex>
            <TextField placeholder="Game1" variation="quiet" size="large" />
            <SelectField label="Roster" variation="quiet">
                {rosters.map((roster, i) => <option value={roster}>{roster}</option>)}
            </SelectField>
            <TextField placeholder="Opponent" variation="quiet" />
            <Link to="/">Home</Link>
            <Link to="/new-game">New Game</Link>
        </Flex>
    )
}