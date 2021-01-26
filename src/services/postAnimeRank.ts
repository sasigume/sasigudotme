// Using Jikan API https://jikan.docs.apiary.io/

function convertAnime(anime, i) {
  return [
    { h2: i+1 + '. ' + anime.title ?? 'タイトル' },
    {
      ul: [
        anime.start_date ?? '2999-1-1',
        anime.members + '人視聴' ?? '9999999',
        'スコア: ' + anime.score ?? '10.0'
      ]
    },
    { p : ''}
  ]
}

const firstText = `このランキングは、MyAnimeListの非公式API「Jikan」を使用し、毎日自動で生成しています。詳しくは以下のソースコードをご覧ください。\n\n[https://github.com/and0ry0/andoryocom/tree/main/src:embed:cite]\n\nなお、デプロイにVercelを使っているので、AWSに何らかの障害が発生した場合は投稿されません。\n\n`

export async function PostAnimeRank() {
  const today = new Date().toLocaleDateString('ja')
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
  const data = await res.json()
  const topAnimes = data.top.map((anime, i) => convertAnime(anime, i)) ?? []
  const json2md = require('json2md')
  const text = json2md(topAnimes)

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.HATENABLOG_POST_EMAIL,
    from: 'sasigume@gmail.com',
    subject: today + '時点の世界アニメ人気ランキングTop50',
    text: firstText + text,
  };
  sgMail.send(msg);
}