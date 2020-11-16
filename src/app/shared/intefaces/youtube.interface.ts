export interface YoutubeChannelResult {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items?: (Video)[] | null;
}
export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}
export interface Video {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
}
export interface Id {
    kind: string;
    videoId: string;
}
export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}
export interface Thumbnails {
    default: ThumbnailInfo;
    medium: ThumbnailInfo;
    high: ThumbnailInfo;
}
export interface ThumbnailInfo {
    url: string;
    width: number;
    height: number;
}