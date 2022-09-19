export default async function handler(req, res) {
  const response = await fetch('https://animal-police.sub.jp/kainusikentei_backend/update.php?type=' + req.query.type + "&id=" + req.query.id + "&result=" + req.query.result);
  const update = await response.json();

  res.status(200).json(update);
}