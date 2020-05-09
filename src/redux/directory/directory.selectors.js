import {createSelector} from 'reselect';

// #### INPUT SELECTOR
const directorySelector = state => (state.directory);

// #### OUTPUT SELECTOR
export const directorySections = createSelector(
    [directorySelector],
    (directory) => directory.sections
)