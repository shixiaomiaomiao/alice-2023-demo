import Link from 'next/link';

export default function Index(props) {
  return <div {...props}>
    我是文章列表页面
    <div><Link href="/">首页(即文章列表页面)</Link></div>
    <div><Link href="/manage">后台管理页面</Link></div>
    <div>
      <ul>
        <li>
          <Link href={
            {
              pathname: '/document/[documentId]',
              query: { documentId: 1 }
            }
          }>文章1</Link></li>
        <li><Link href={
          {
            pathname: '/document/[documentId]',
            query: { documentId: 2 }
          }
        }>文章2</Link></li>
        <li><Link href={
          {
            pathname: '/document/[documentId]',
            query: { documentId: 3 }
          }
        }>文章3</Link></li>
      </ul>
    </div>
  </div>
}