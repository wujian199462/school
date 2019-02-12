package com.school.school.controller;

import com.school.school.domain.Score;
import com.school.school.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/score")
public class ScoreController {

    @Autowired
    ScoreService scoreService;

    @ResponseBody
    @RequestMapping("/getAllScoreByStuNo")
    public Score getAllScoreByStuNo(String stuNo){
        Score score = scoreService.getAllScoreByStuNo(stuNo);
        return score;
    }

    @ResponseBody
    @RequestMapping("/getAllScore")
    public List getAllScore(String stuNo){
        List list = scoreService.getAllScore(stuNo);
        return list;
    }
}
