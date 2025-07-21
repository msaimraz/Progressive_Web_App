import React, {useEffect} from 'react';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {useDispatch, useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {components} from '../components';
import {actions} from '../store/actions';

// actions
import {setSelectedTags} from '../store/slices/filterSlice';
import {setSelectedColors} from '../store/slices/filterSlice';
import {setSelectedAgeGroups} from '../store/slices/filterSlice';
import {setSelectedPlayTypes} from '../store/slices/filterSlice';
import {setSelectedCategories} from '../store/slices/filterSlice';

// types
import type {ColorType} from '../types';

// labels
const labels = ['sale', 'top', 'new'];

export const Filter: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();

  hooks.useThemeColor('#f5fafb');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#f5fafb'));
  }, [dispatch]);

  // api call
  const {productsLoading, products} = hooks.useProducts();
  const uniqueAgeGroups = hooks.useUniqueAgeGroups(products);
  const uniquePlayTypes = hooks.useUniquePlayTypes(products);

  const isLoading = productsLoading;

  // unique colors
  const uniqueTags = hooks.useUniqueTags(products);
  const uniqueColors = hooks.useUniqueColors(products);

  const {
    selectedColors,
    selectedTags,
    selectedCategories,
    selectedAgeGroups,
    selectedPlayTypes,
  } = useSelector((state: RootState) => state.filterSlice);

  // Handle color click
  const handleColorClick = (color: ColorType) => {
    if (selectedColors.includes(color.name)) {
      dispatch(
        setSelectedColors(
          selectedColors.filter(
            (selectedColor) => selectedColor !== color.name,
          ),
        ),
      );
    } else {
      dispatch(setSelectedColors([...selectedColors, color.name]));
    }
  };

  // Handle age group click
  const handleAgeGroupClick = (ageGroup: string) => {
    if (selectedAgeGroups.includes(ageGroup)) {
      dispatch(
        setSelectedAgeGroups(
          selectedAgeGroups.filter(
            (selectedAgeGroup) => selectedAgeGroup !== ageGroup,
          ),
        ),
      );
    } else {
      dispatch(setSelectedAgeGroups([...selectedAgeGroups, ageGroup]));
    }
  };

  // Handle play type click
  const handlePlayTypeClick = (playType: string) => {
    if (selectedPlayTypes.includes(playType)) {
      dispatch(
        setSelectedPlayTypes(
          selectedPlayTypes.filter(
            (selectedPlayType) => selectedPlayType !== playType,
          ),
        ),
      );
    } else {
      dispatch(setSelectedPlayTypes([...selectedPlayTypes, playType]));
    }
  };

  // Handle tag click
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      dispatch(
        setSelectedTags(
          selectedTags.filter((selectedTag) => selectedTag !== tag),
        ),
      );
    } else {
      dispatch(setSelectedTags([...selectedTags, tag]));
    }
  };

  // Handle category click
  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      dispatch(
        setSelectedCategories(
          selectedCategories.filter(
            (selectedCategory) => selectedCategory !== category,
          ),
        ),
      );
    } else {
      dispatch(setSelectedCategories([...selectedCategories, category]));
    }
  };

  // Render header
  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='Filter'
        showGoBack={true}
      />
    );
  };

  // Render labels
  const renderLabels = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginTop: 16, marginBottom: 30}}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {labels.map((item, index) => {
            return (
              <span
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 30,
                  cursor: 'pointer',
                }}
                onClick={() => handleCategoryClick(item)}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    border: '2px solid #E8EFF4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 8,
                    backgroundColor: 'var(--white-color)',
                  }}
                >
                  {selectedCategories.includes(item) && <svg.AgeCheckSvg />}
                </div>
                <div
                  style={{
                    margin: 0,
                    padding: '0 6px',
                    display: 'flex',
                    borderRadius: 12,
                    backgroundColor:
                      item === 'sale'
                        ? '#51BA74'
                        : item === 'new'
                        ? '#F5C102'
                        : '#FF6262',
                  }}
                >
                  <span
                    className='t12'
                    style={{lineHeight: 1.7, color: 'var(--white-color)'}}
                  >
                    {item}
                  </span>
                </div>
              </span>
            );
          })}
        </div>
      </section>
    );
  };

  // Render colors
  const renderColors = (): JSX.Element => {
    return (
      <section
        style={{marginBottom: 40}}
        className='container'
      >
        <h5 style={{marginBottom: 12}}>Color</h5>
        <div
          style={{gap: 10}}
          className='row-center-wrap'
        >
          {uniqueColors.map((color: ColorType) => {
            return (
              <button
                key={color.id}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: color.code,
                  borderRadius: 15,
                  border: `2px solid ${
                    selectedColors.includes(color.name)
                      ? 'var(--main-color)'
                      : color.code
                  }`,
                }}
                className='clickable'
                onClick={() => handleColorClick(color)}
              >
                {/* {color.name} */}
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  // Render age groups
  const renderAgeGroups = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 40}}
      >
        <h5 style={{marginBottom: 12}}>Age Group</h5>
        <div
          className='row-center-wrap'
          style={{gap: 8}}
        >
          {uniqueAgeGroups.map((age: string) => {
            return (
              <button
                key={age}
                style={{
                  border: `1px solid ${
                    selectedAgeGroups.includes(age)
                      ? 'var(--main-color)'
                      : 'var(--border-color)'
                  }`,
                  padding: '5px 18px',
                  borderRadius: 50,
                  backgroundColor: selectedAgeGroups.includes(age)
                    ? 'var(--main-color)'
                    : 'transparent',
                }}
                onClick={() => handleAgeGroupClick(age)}
              >
                <span
                  className='t16'
                  style={{
                    color: selectedAgeGroups.includes(age) ? 'white' : '',
                    marginTop: 2,
                  }}
                >
                  {age}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  // Render play types
  const renderPlayTypes = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 40}}
      >
        <h5 style={{marginBottom: 12}}>Play Type</h5>
        <div>
          {uniquePlayTypes.map((type: string, index, array) => {
            const isLast = index === array.length - 1;

            return (
              <button
                key={type}
                className='row-center'
                onClick={() => handlePlayTypeClick(type)}
                style={{gap: 6, marginBottom: isLast ? 0 : 8}}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 5,
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--white-color)',
                  }}
                  className='center'
                >
                  {selectedPlayTypes.includes(type) && <svg.AgeCheckSvg />}
                </div>
                <span className='t18'>{type}</span>
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  // Render tags
  const renderTags = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 40}}
      >
        <h5 style={{marginBottom: 12}}>Tags</h5>
        <div
          className='row-center-wrap'
          style={{gap: 8}}
        >
          {uniqueTags.map((tag: string) => {
            return (
              <button
                key={tag}
                style={{
                  padding: '5px 18px',
                  borderRadius: 50,
                  border: `1px solid ${
                    selectedTags.includes(tag)
                      ? 'var(--main-color)'
                      : 'var(--border-color)'
                  }`,
                  backgroundColor: selectedTags.includes(tag)
                    ? 'var(--main-color)'
                    : 'transparent',
                }}
                onClick={() => handleTagClick(tag)}
              >
                <span
                  className='t16'
                  style={{
                    color: selectedTags.includes(tag) ? 'white' : '',
                    marginTop: 2,
                  }}
                >
                  {tag}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  // Render button
  const renderButton = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 20}}
      >
        <components.Button
          text='apply filters'
          to='back'
        />
      </section>
    );
  };

  // Render content
  const renderContent = (): JSX.Element => {
    if (isLoading) return <components.Loader />;

    return (
      <main className='scrollable'>
        {renderLabels()}
        {renderColors()}
        {renderAgeGroups()}
        {renderPlayTypes()}
        {renderTags()}
        {renderButton()}
      </main>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  );
};
