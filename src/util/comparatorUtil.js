/**
 * Comparator function for sorting issues that have saved "desired indices"
 * Desired indices are first priority, and any issues without a desired indice 
 * are sorted last, in created_at date descending.
 * 
 * @param {*} desiredIndices - The map of desired indices
 */
export const issueComparator = desiredIndices => (a, b) => {
    const aDesiredIndex = desiredIndices[a.id];
    const bDesiredIndex = desiredIndices[b.id];
    const aHasDesired = aDesiredIndex !== undefined;
    const bHasDesired = bDesiredIndex !== undefined;

    if (aHasDesired && bHasDesired) {
        return aDesiredIndex - bDesiredIndex;
    } else if (aHasDesired && !bHasDesired) {
        return -1;
    } else if (!aHasDesired && bHasDesired) {
        return 1;
    }

    return dateComparator(a.created_at, b.created_at);
}

/**
 * Simple date comparator
 * 
 * @param {Date} a 
 * @param {Date} b 
 */
export const dateComparator = (a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }

    return 0;
}