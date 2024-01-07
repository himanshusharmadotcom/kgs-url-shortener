import validateUrl from '../Utils/util.js'
import urlData from '../models/url.model.js'
import crypto from 'crypto'
import { URL } from 'url'

function generateHash(url){
    const hash = crypto.createHash('sha256').update(url).digest('hex');
    return hash.substring(0, 8)
}

function extractQueryParams(origUrl) {
    const url = new URL(origUrl);
    return url.searchParams.toString();
}

export const shortController = async (req, res, next) => {
    const { origUrl } = req.body
    const base = 'http://localhost:3000'
    if (validateUrl(origUrl)) {
        try {
            let url = await urlData.findOne({ origUrl })
            if (url) {
                res.json(url)
            } else {
                const queryParams = extractQueryParams(origUrl)
                const hash = generateHash(origUrl)
                const shortUrl = `${base}/${hash}`

                url = new urlData({
                    urlId: hash,
                    origUrl,
                    shortUrl,
                    queryParams,
                })

                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json('Server Error')
        }
    }else{
        res.status(400).json('Invalid Original Url')
    }
}