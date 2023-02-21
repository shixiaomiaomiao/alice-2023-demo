import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function User() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/api/user",
        fetcher
      );
    if (isLoading) {
        return <div>正在加载远程的数据...</div>
    }
    if (error) {
        return <div>远程数据获取失败</div>
    }
    if (data) {
        return <div>从远程API接口/api/user中获取到数据如下:
            <div>
            {JSON.stringify(data)}
            </div>
            </div>
    }
}