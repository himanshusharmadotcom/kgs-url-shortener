import validateUrl from '../Utils/util.js'
import urlData from '../models/url.model.js'
import crypto from 'crypto'
import { URL } from 'url'

function generateHash(url) {
    const hash = crypto.createHash('sha256').update(url).digest('hex');
    return hash.substring(0, 8)
}

function extractQueryParams(origUrl) {
    const url = new URL(origUrl);
    return url.searchParams.toString();
}

export const shortController = async (req, res, next) => {
    const { origUrl, userRef } = req.body
    const base = 'https://kgs-url-shortener.onrender.com/backend/service'
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
                    userRef,
                })

                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(400).json('Invalid Original Url')
    }
}

export const allController = async (req, res, next) => {
    const{_id} = req.query
    try {
        const data = await urlData.find({ userRef: _id })
        res.json(data)
    } catch (error) {
        next(error)
    }
}

export const redirectController = async (req, res, next) => {
    try {
        const storedUrl = await urlData.findOne({ urlId: req.params.urlId });
        if (storedUrl) {
            const origQueryParams = extractQueryParams(storedUrl.origUrl);
            if (origQueryParams === storedUrl.queryParams) {
                storedUrl.clicks++;
                await storedUrl.save();
                return res.redirect(storedUrl.origUrl);
            } else {
                return res.status(400).json('Query parameters mismatch');
            }
        } else {
            return res.status(404).json("Not found");
        }
    } catch (error) {
        next(error)
    }
}

export const deleteController = async (req, res, next) => {
    try {
        const deleteStatus = await urlData.findOneAndDelete({ urlId: req.params.urlId });
        if (!deleteStatus) {
            return res.status(404).json("Document not found or something went wrong");
        }
        return res.status(200).json('Success');
    } catch (error) {
        next(error);
    }
};

