package com.school.school.service;

import com.school.school.domain.Score;

import java.util.List;

public interface ScoreService {

    /**
     * 查询最近成绩
     * @return
     */
    Score getAllScoreByStuNo(String stuNo);

    /**
     * 查询所有成绩
     * @return
     */
    List getAllScore(String stuNo);
}
