export function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const formattedRuntime = `${hours}h ${minutes}m`;
    return formattedRuntime
}