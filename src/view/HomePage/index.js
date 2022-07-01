import { useEffect, memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { HeroComponent, Card, Section, Swipe, Accordion } from 'component';

import homePageSaga from './homePage.saga';
import homePageReducer from './homePage.reducer';
import { HOME_INJECTOR } from './homePage.constants';
import { getCoursesAction, getProductsAction } from './homePage.actions';

const HomePage = (props) => {
  useInjectReducer({ key: HOME_INJECTOR, reducer: homePageReducer });
  useInjectSaga({ key: HOME_INJECTOR, saga: homePageSaga });
 
  useEffect(() => {
    const { getCourses, getProducts } = props;
    getCourses();
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props.homepage);
  const state = props.homepage;
  return (
    <Section.SectionCard className="pt-12 px-6">
      <Section.SectionCard>
        <HeroComponent />
      </Section.SectionCard>

      <Section.SectionCard>
        <Section.TitleUppercase color={'text-custom-blue-100'} text="LATEST COURSES" />
        <Swipe.InitSwipe>
          {state?.loadingCourses
            ? Swipe.SwipeSekeleton()
            : state?.courseData?.map((it, index) =>
                Swipe.SwipeSlides({
                  children: (
                    <Card.CardImage
                      {...{ src: it.thumbnail_src, title: it.title, by: it.data_collaborator[0].name_collaborator }}
                    />
                  ),
                  index,
                }),
              )}
        </Swipe.InitSwipe>
      </Section.SectionCard>

      <Section.SectionCard className="py-9">
        <Section.TitleUppercase color={'text-custom-blue-100'} text="LATEST BLUEPRINTS" />
        <Swipe.InitSwipe>
          {state?.loadingProducts
            ? Swipe.SwipeSekeleton()
            : state?.productData?.map((it, index) =>
                Swipe.SwipeSlides({
                  children: (
                    <Card.CardImage
                      {...{ src: it.thumbnail_src, title: it.title, by: it.data_collaborator[0].name_collaborator }}
                    />
                  ),
                  index,
                }),
              )}
        </Swipe.InitSwipe>
      </Section.SectionCard>
      <Accordion />
      {/* <h1 className="text-xl font-bold" style={{ color: "#383DD4" }}>
        Setup Tailwind CSS 3 with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Headless UI In React
        </span>
      </h1> */}
    </Section.SectionCard>
  );
};

const mapStateToProps = (state) => ({
  homepage: state?.[HOME_INJECTOR],
});

const mapDistpatchToProps = (dispatch) => ({
  getCourses: (payload) => dispatch(getCoursesAction(payload)),
  getProducts: (payload) => dispatch(getProductsAction(payload)),
});

const withConncet = connect(mapStateToProps, mapDistpatchToProps);
export default compose(withConncet, memo)(HomePage);
